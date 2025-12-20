// ==================== localStorage 管理 ====================
const StorageManager = {
    // 取得答題記錄
    getRecord(questionId) {
        const data = localStorage.getItem(`question_${questionId}`);
        return data ? JSON.parse(data) : null;
    },

    // 儲存答題記錄
    setRecord(questionId, record) {
        localStorage.setItem(`question_${questionId}`, JSON.stringify(record));
    },

    // 刪除單題記錄
    deleteRecord(questionId) {
        localStorage.removeItem(`question_${questionId}`);
    },

    // 取得所有記錄
    getAllRecords(questions) {
        const records = {};
        for (let i = 1; i <= questions.length; i++) {
            const record = this.getRecord(i);
            if (record) records[i] = record;
        }
        return records;
    },

    // 取得錯題列表（只記錄是否答錯）
    getMistakes() {
        const data = localStorage.getItem('mistakes');
        return data ? JSON.parse(data) : {};
    },

    // 標記為錯題
    addMistake(questionId) {
        const mistakes = this.getMistakes();
        mistakes[questionId] = true;
        localStorage.setItem('mistakes', JSON.stringify(mistakes));
    },

    // 移除錯題標記
    clearMistake(questionId) {
        const mistakes = this.getMistakes();
        delete mistakes[questionId];
        localStorage.setItem('mistakes', JSON.stringify(mistakes));
    },

    // 重置所有進度
    resetAll() {
        if (confirm('確定要重置所有練習進度嗎？此操作無法復原。')) {
            localStorage.clear();
            location.reload();
        }
    }
};

// ==================== 應用程式主邏輯 ====================
class PracticeApp {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.selectedOption = undefined;
        this.mistakeReviewMode = false;
        this.displayedQuestions = this.questions;
        this.initializeElements();
        this.initializeEventListeners();
        this.loadInitialState();
    }

    // 初始化 DOM 元素
    initializeElements() {
        this.elements = {
            questionTitle: document.getElementById('questionTitle'),
            questionText: document.getElementById('questionText'),
            optionsContainer: document.getElementById('optionsContainer'),
            submitBtn: document.getElementById('submitBtn'),
            retryBtn: document.getElementById('retryBtn'),
            showExplanationBtn: document.getElementById('showExplanationBtn'),
            resultSection: document.getElementById('resultSection'),
            resultCard: document.getElementById('resultCard'),
            resultText: document.getElementById('resultText'),
            userAnswerDisplay: document.getElementById('userAnswerDisplay'),
            correctAnswerDisplay: document.getElementById('correctAnswerDisplay'),
            explanationToggle: document.getElementById('explanationToggle'),
            explanationContent: document.getElementById('explanationContent'),
            explanationText: document.getElementById('explanationText'),
            currentQNum: document.getElementById('currentQNum'),
            totalQNum: document.getElementById('totalQNum'),
            questionSelect: document.getElementById('questionSelect'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            questionList: document.getElementById('questionList'),
            resetBtn: document.getElementById('resetBtn'),
            completed: document.getElementById('completed'),
            total: document.getElementById('total'),
            correctRate: document.getElementById('correctRate'),
            mistakeReviewBtn: document.getElementById('mistakeReviewBtn'),
            mistakeInfo: document.getElementById('mistakeInfo'),
            mistakeCount: document.getElementById('mistakeCount')
        };
    }

    // 初始化事件監聽
    initializeEventListeners() {
        this.elements.submitBtn.addEventListener('click', () => this.submitAnswer());
        this.elements.retryBtn.addEventListener('click', () => this.retryQuestion());
        this.elements.showExplanationBtn.addEventListener('click', () => this.showExplanation());
        this.elements.explanationToggle.addEventListener('click', () => this.toggleExplanation());
        this.elements.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.elements.questionSelect.addEventListener('change', (e) => this.goToQuestion(parseInt(e.target.value)));
        this.elements.resetBtn.addEventListener('click', () => StorageManager.resetAll());
        this.elements.mistakeReviewBtn.addEventListener('click', () => this.toggleMistakeReview());
    }

    // 載入初始狀態
    loadInitialState() {
        this.elements.total.textContent = this.questions.length;
        this.populateQuestionSelect();
        this.renderQuestionList();
        this.loadQuestion(0);
        this.updateProgressStats();
    }

    // 填充題號選單
    populateQuestionSelect() {
        this.elements.questionSelect.innerHTML = '';
        this.displayedQuestions.forEach((q, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `題目 ${q.id}`;
            this.elements.questionSelect.appendChild(option);
        });
    }

    // 渲染題目列表
    renderQuestionList() {
        this.elements.questionList.innerHTML = '';
        this.displayedQuestions.forEach((q, index) => {
            const item = document.createElement('button');
            item.className = 'question-item';
            item.textContent = q.id;
            
            const record = StorageManager.getRecord(q.id);
            if (record) {
                item.classList.add(record.isCorrect ? 'correct' : 'incorrect');
            }
            
            if (index === this.currentQuestionIndex) {
                item.classList.add('active');
            }
            
            item.addEventListener('click', () => this.loadQuestion(index));
            this.elements.questionList.appendChild(item);
        });
    }

    // 載入題目
    loadQuestion(index) {
        if (index < 0 || index >= this.displayedQuestions.length) return;
        
        this.currentQuestionIndex = index;
        const question = this.displayedQuestions[index];
        
        this.elements.questionTitle.textContent = `題目 ${question.id}`;
        this.elements.questionText.textContent = question.question;
        this.elements.currentQNum.textContent = index + 1;
        this.elements.totalQNum.textContent = this.displayedQuestions.length;
        this.elements.questionSelect.value = index;
        
        this.renderOptions(question);
        this.elements.resultSection.style.display = 'none';
        this.updateNavigationButtons();
        this.renderQuestionList();
        
        this.selectedOption = undefined;
    }

    // 渲染選項
    renderOptions(question) {
        this.elements.optionsContainer.innerHTML = '';
        const record = StorageManager.getRecord(question.id);
        const isAnswered = record !== null;
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            if (isAnswered) {
                optionDiv.classList.add('disabled');
                if (index === record.selectedOption) {
                    optionDiv.classList.add(record.isCorrect ? 'correct' : 'incorrect');
                    optionDiv.classList.add('selected');
                }
                if (index === question.correctAnswer && !record.isCorrect) {
                    optionDiv.classList.add('correct');
                }
            }
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'question-option';
            input.value = index;
            input.disabled = isAnswered;
            
            if (isAnswered && index === record.selectedOption) {
                input.checked = true;
            }
            
            const label = document.createElement('label');
            label.textContent = option;
            
            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            this.elements.optionsContainer.appendChild(optionDiv);
            
            if (!isAnswered) {
                // 點擊 input 時選中
                input.addEventListener('change', () => {
                    this.selectedOption = parseInt(input.value);
                });
                
                // 點擊整個選項方框時也選中
                optionDiv.addEventListener('click', (e) => {
                    if (e.target !== input) {
                        input.checked = true;
                        this.selectedOption = parseInt(input.value);
                    }
                });
            }
        });
        
        this.updateSubmitButtonState(isAnswered);
    }

    // 更新提交按鈕狀態
    updateSubmitButtonState(isAnswered) {
        if (isAnswered) {
            this.elements.submitBtn.style.display = 'none';
            this.elements.retryBtn.style.display = 'inline-block';
            this.showResult(this.displayedQuestions[this.currentQuestionIndex]);
        } else {
            this.elements.submitBtn.style.display = 'inline-block';
            this.elements.retryBtn.style.display = 'none';
        }
    }

    // 提交答案
    submitAnswer() {
        if (this.selectedOption === undefined) {
            alert('請選擇一個選項');
            return;
        }
        
        const question = this.displayedQuestions[this.currentQuestionIndex];
        const isCorrect = this.selectedOption === question.correctAnswer;
        
        StorageManager.setRecord(question.id, {
            selectedOption: this.selectedOption,
            isCorrect: isCorrect
        });

        if (!isCorrect) {
            StorageManager.addMistake(question.id);
        } else {
            StorageManager.clearMistake(question.id);
        }
        
        this.loadQuestion(this.currentQuestionIndex);
        this.updateProgressStats();
    }

    // 重新作答
    retryQuestion() {
        const question = this.displayedQuestions[this.currentQuestionIndex];
        StorageManager.deleteRecord(question.id);
        this.selectedOption = undefined;
        this.loadQuestion(this.currentQuestionIndex);
        this.updateProgressStats();
    }

    // 顯示結果
    showResult(question) {
        // 結果卡片已移除，只顯示詳細解說
        const record = StorageManager.getRecord(question.id);
        this.elements.resultSection.style.display = 'block';
        this.elements.explanationText.textContent = question.explanation;
        this.elements.explanationContent.style.display = 'block';
        this.elements.explanationToggle.classList.add('active');
    }

    // 顯示詳解（不需作答）
    showExplanation() {
        const question = this.displayedQuestions[this.currentQuestionIndex];
        this.elements.resultSection.style.display = 'block';
        this.elements.explanationText.textContent = question.explanation;
        this.elements.explanationContent.style.display = 'block';
        this.elements.explanationToggle.classList.add('active');
    }

    // 切換詳解展開/收合
    toggleExplanation() {
        const isVisible = this.elements.explanationContent.style.display !== 'none';
        this.elements.explanationContent.style.display = isVisible ? 'none' : 'block';
        this.elements.explanationToggle.classList.toggle('active', !isVisible);
    }

    // 上一題
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.loadQuestion(this.currentQuestionIndex - 1);
        }
    }

    // 下一題
    nextQuestion() {
        if (this.currentQuestionIndex < this.displayedQuestions.length - 1) {
            this.loadQuestion(this.currentQuestionIndex + 1);
        }
    }

    // 跳轉題目
    goToQuestion(index) {
        this.loadQuestion(index);
    }

    // 更新導航按鈕狀態
    updateNavigationButtons() {
        this.elements.prevBtn.disabled = this.currentQuestionIndex === 0;
        this.elements.nextBtn.disabled = this.currentQuestionIndex === this.displayedQuestions.length - 1;
    }

    // 切換錯題復習模式
    toggleMistakeReview() {
        this.mistakeReviewMode = !this.mistakeReviewMode;
        
        if (this.mistakeReviewMode) {
            const mistakes = StorageManager.getMistakes();
            this.displayedQuestions = this.questions.filter(q => mistakes[q.id]);
            
            if (this.displayedQuestions.length === 0) {
                alert('目前沒有錯題！');
                this.mistakeReviewMode = false;
                this.displayedQuestions = this.questions;
                return;
            }
            
            this.elements.mistakeReviewBtn.classList.add('active');
            this.elements.mistakeInfo.style.display = 'block';
            this.elements.mistakeCount.textContent = this.displayedQuestions.length;
        } else {
            this.displayedQuestions = this.questions;
            this.elements.mistakeReviewBtn.classList.remove('active');
            this.elements.mistakeInfo.style.display = 'none';
        }
        
        this.currentQuestionIndex = 0;
        this.renderQuestionList();
        this.populateQuestionSelect();
        this.loadQuestion(0);
    }

    // 更新進度統計
    updateProgressStats() {
        const allRecords = StorageManager.getAllRecords(this.questions);
        const completedCount = Object.keys(allRecords).length;
        const correctCount = Object.values(allRecords).filter(r => r.isCorrect).length;
        
        this.elements.completed.textContent = completedCount;
        this.elements.total.textContent = this.questions.length;
        
        const correctRate = completedCount > 0 ? Math.round((correctCount / completedCount) * 100) : 0;
        this.elements.correctRate.textContent = correctRate;
    }
}

// ==================== 初始化應用程式 ====================
document.addEventListener('DOMContentLoaded', () => {
    new PracticeApp(questions);
});
