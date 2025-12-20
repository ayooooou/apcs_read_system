import re

with open('pdf_content.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# 將整個內容分成題目塊
questions = content.split('Q.')[1:]  # 跳過第一個空白塊

answers = {}

for q in questions[:20]:  # 只處理前 20 題
    # 取得題號
    match = re.match(r'(\d{3})', q)
    if not match:
        continue
    
    q_num = int(match.group(1))
    
    # 找出答案與說明區域後的內容
    if '答案與說明' in q:
        # 分割出答案說明部分
        parts = q.split('答案與說明')
        if len(parts) >= 2:
            answer_section = parts[1]
            
            # 在答案說明區域中找選項 (A)-(E)
            # 尋找獨立的 (X) 格式
            lines = answer_section.split('\n')
            for i, line in enumerate(lines[:30]):  # 檢查前 30 行
                # 尋找以 (A), (B), (C), (D), (E) 開頭的行
                match = re.match(r'^\s*\(([A-E])\)', line)
                if match:
                    ans = match.group(1)
                    answers[q_num] = ans
                    
                    # 顯示找到的答案及其說明
                    explanation = line[match.end():].strip()
                    print(f"Q.{q_num:03d}: 答案 ({ans}) - {explanation[:100]}")
                    break

print(f"\n\n找到 {len(answers)} 個答案")
print("\n答案索引對照:")
answer_map = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4}
for q_num in sorted(answers.keys()):
    ans_letter = answers[q_num]
    ans_index = answer_map[ans_letter]
    print(f"Q.{q_num:03d}: ({ans_letter}) = correctAnswer: {ans_index}")
