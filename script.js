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

    // 取得最後一題位置
    getLastQuestionIndex() {
        const data = localStorage.getItem('lastQuestionIndex');
        return data ? parseInt(data) : 0;
    },

    // 記錄最後一題位置
    setLastQuestionIndex(index) {
        localStorage.setItem('lastQuestionIndex', index.toString());
    },

    // 取得難度篩選
    getDifficultyFilter() {
        const data = localStorage.getItem('difficultyFilter');
        return data ? JSON.parse(data) : { '易': true, '中': true, '難': true };
    },

    // 設置難度篩選
    setDifficultyFilter(filter) {
        localStorage.setItem('difficultyFilter', JSON.stringify(filter));
    },

    // 取得主題（light|dark）
    getTheme() {
        return localStorage.getItem('theme') || 'light';
    },

    // 設置主題
    setTheme(theme) {
        localStorage.setItem('theme', theme);
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
        this.skipResetOnLoad = false; // 避免在提交後立刻清除紀錄
        this.mistakeSnapshot = null; // 錯題模式的題目快照
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
            mistakeCount: document.getElementById('mistakeCount'),
            difficultyFilterBtn: document.getElementById('difficultyFilterBtn'),
            difficultyModal: document.getElementById('difficultyModal'),
            difficultyModalClose: document.getElementById('difficultyModalClose'),
            difficultyApplyBtn: document.getElementById('difficultyApplyBtn'),
            difficultyResetBtn: document.getElementById('difficultyResetBtn'),
            difficultyChecks: document.querySelectorAll('.difficulty-check')
        };
        // 額外元素
        this.elements.themeToggleBtn = document.getElementById('themeToggleBtn');
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
        
        // 難度篩選事件
        this.elements.difficultyFilterBtn.addEventListener('click', () => this.openDifficultyModal());
        this.elements.difficultyModalClose.addEventListener('click', () => this.closeDifficultyModal());
        this.elements.difficultyModal.addEventListener('click', (e) => {
            if (e.target === this.elements.difficultyModal) {
                this.closeDifficultyModal();
            }
        });
        this.elements.difficultyApplyBtn.addEventListener('click', () => this.applyDifficultyFilter());
        this.elements.difficultyResetBtn.addEventListener('click', () => this.resetDifficultyFilter());

        // 主題切換
        if (this.elements.themeToggleBtn) {
            this.elements.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        }
    }

    // 載入初始狀態
    loadInitialState() {
        this.elements.total.textContent = this.questions.length;
        this.populateQuestionSelect();
        this.renderQuestionList();
        // 載入上次的題目位置，如果沒有則默認為 0
        const lastIndex = StorageManager.getLastQuestionIndex();
        this.loadQuestion(lastIndex);
        this.updateProgressStats();

        // 套用主題
        const theme = StorageManager.getTheme();
        this.applyTheme(theme);
    }

    // 套用主題
    applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateThemeToggleButton('dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            this.updateThemeToggleButton('light');
        }
        StorageManager.setTheme(theme);
    }

    // 切換主題
    toggleTheme() {
        const current = StorageManager.getTheme();
        const next = current === 'dark' ? 'light' : 'dark';
        this.applyTheme(next);
    }

    // 更新主題按鈕文字
    updateThemeToggleButton(theme) {
        if (!this.elements.themeToggleBtn) return;
        const iconSpan = this.elements.themeToggleBtn.querySelector('.iconify');
        if (iconSpan) {
            iconSpan.setAttribute('data-icon', theme === 'dark' ? 'tabler:sun' : 'tabler:moon');
        }
        this.elements.themeToggleBtn.title = theme === 'dark' ? '切換為亮色模式' : '切換為深色模式';
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
            // 側邊欄已移除，此函數保留但不執行任何操作
            if (!this.elements.questionList) return;
        
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
        
        // 記錄當前題目的位置（只在非錯題模式時記錄）
        if (!this.mistakeReviewMode) {
            StorageManager.setLastQuestionIndex(this.questions.findIndex(q => q.id === question.id));
        }

        // 在錯題模式中，自動清除舊的錯誤紀錄，避免先看到答案
        // 但若是剛提交完（skipResetOnLoad=true），則保留紀錄以顯示結果
        if (this.mistakeReviewMode && !this.skipResetOnLoad) {
            const record = StorageManager.getRecord(question.id);
            if (record && !record.isCorrect) {
                StorageManager.deleteRecord(question.id);
            }
        }
        
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
        // 重置旗標，讓下一次載入可正常清除舊錯題紀錄
        this.skipResetOnLoad = false;
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
        
        // 提交後保留紀錄以顯示結果
        this.skipResetOnLoad = true;
        this.loadQuestion(this.currentQuestionIndex);
        this.updateProgressStats();
        
        // 如果在錯題模式中，更新錯題統計
        if (this.mistakeReviewMode) {
            this.updateMistakeStats();
        }
    }

    // 重新作答
    retryQuestion() {
        const question = this.displayedQuestions[this.currentQuestionIndex];
        StorageManager.deleteRecord(question.id);
        this.selectedOption = undefined;
        this.loadQuestion(this.currentQuestionIndex);
        this.updateProgressStats();
        
        // 如果在錯題模式中，更新錯題統計
        if (this.mistakeReviewMode) {
            this.updateMistakeStats();
        }
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
            // 進入錯題模式：重新抓取當前的錯題
            const mistakes = StorageManager.getMistakes();
            const mistakeQuestions = this.questions.filter(q => mistakes[q.id]);
            
            if (mistakeQuestions.length === 0) {
                alert('目前沒有錯題！');
                this.mistakeReviewMode = false;
                return;
            }
            
            // 創建錯題快照（記錄進入時的錯題ID）
            this.mistakeSnapshot = mistakeQuestions.map(q => q.id);
            
            // 應用難度篩選
            this.updateDifficultyFilteredQuestions();
            
            this.elements.mistakeReviewBtn.classList.add('active');
            this.elements.mistakeInfo.style.display = 'block';
            this.elements.mistakeCount.textContent = mistakeQuestions.length;
            
            // 更新錯題模式的統計信息
            this.updateMistakeStats();
            
            console.log('進入錯題模式，共', mistakeQuestions.length, '題');
        } else {
            // 離開錯題模式：清除快照，回到所有題目
            this.mistakeSnapshot = null;
            
            // 應用難度篩選
            this.updateDifficultyFilteredQuestions();
            
            this.elements.mistakeReviewBtn.classList.remove('active');
            this.elements.mistakeInfo.style.display = 'none';
            
            console.log('離開錯題模式');
        }
        
        this.currentQuestionIndex = 0;
        this.renderQuestionList();
        this.populateQuestionSelect();
        this.loadQuestion(0);
    }

    // 更新錯題模式統計
    updateMistakeStats() {
        if (!this.mistakeReviewMode || !this.mistakeSnapshot) return;
        
        const mistakeInfoElement = this.elements.mistakeInfo;
        const totalMistakes = this.mistakeSnapshot.length;
        
        // 計算在錯題模式中已經重新答對的題數
        const correctedCount = this.mistakeSnapshot.filter(id => {
            const record = StorageManager.getRecord(id);
            return record && record.isCorrect;
        }).length;
        
        mistakeInfoElement.innerHTML = `
            <p>錯題復習模式 (共 <strong>${totalMistakes}</strong> 題
            ${correctedCount > 0 ? ` | 已修正 <strong>${correctedCount}</strong> 題 ✨` : ''})
            </p>
        `;
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

    // 打開難度篩選modal
    openDifficultyModal() {
        // 從localStorage讀取當前的篩選設置
        const filter = StorageManager.getDifficultyFilter();
        
        // 更新checkbox的狀態
        this.elements.difficultyChecks.forEach(check => {
            check.checked = filter[check.value] !== false;
        });
        
        this.elements.difficultyModal.style.display = 'block';
    }

    // 關閉難度篩選modal
    closeDifficultyModal() {
        this.elements.difficultyModal.style.display = 'none';
    }

    // 應用難度篩選
    applyDifficultyFilter() {
        const filter = {};
        this.elements.difficultyChecks.forEach(check => {
            filter[check.value] = check.checked;
        });
        
        // 保存篩選設置
        StorageManager.setDifficultyFilter(filter);
        
        // 更新顯示的題目
        this.updateDifficultyFilteredQuestions();
        
        // 關閉modal
        this.closeDifficultyModal();
        
        // 更新按鈕狀態
        this.updateDifficultyButtonState();
    }

    // 重置難度篩選為全選
    resetDifficultyFilter() {
        const allChecked = { '易': true, '中': true, '難': true };
        StorageManager.setDifficultyFilter(allChecked);
        
        // 更新checkbox
        this.elements.difficultyChecks.forEach(check => {
            check.checked = true;
        });
    }

    // 根據難度篩選更新顯示的題目
    updateDifficultyFilteredQuestions() {
        const filter = StorageManager.getDifficultyFilter();
        
        // 如果在錯題模式，先過濾錯題
        const basedQuestions = this.mistakeReviewMode ? 
            this.questions.filter(q => this.mistakeSnapshot.includes(q.id)) : 
            this.questions;
        
        // 再根據難度篩選
        this.displayedQuestions = basedQuestions.filter(q => {
            return filter[q.difficulty] !== false;
        });
        
        if (this.displayedQuestions.length === 0) {
            alert('沒有符合篩選條件的題目');
            // 重置篩選
            StorageManager.setDifficultyFilter({ '易': true, '中': true, '難': true });
            this.displayedQuestions = basedQuestions;
            // 更新難度按鈕狀態
            this.updateDifficultyButtonState();
        }
        
        // 更新UI
        this.currentQuestionIndex = 0;
        this.populateQuestionSelect();
        this.renderQuestionList();
        this.loadQuestion(0);
    }

    // 更新難度篩選按鈕狀態
    updateDifficultyButtonState() {
        const filter = StorageManager.getDifficultyFilter();
        const isAllSelected = Object.values(filter).every(v => v === true);
        
        if (isAllSelected) {
            this.elements.difficultyFilterBtn.classList.remove('active');
        } else {
            this.elements.difficultyFilterBtn.classList.add('active');
        }
    }
}

// ==================== 初始化應用程式 ====================
document.addEventListener('DOMContentLoaded', () => {
    const app = new PracticeApp(questions);
    // 初始化難度篩選按鈕狀態
    app.updateDifficultyButtonState();
});
