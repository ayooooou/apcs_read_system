import re

# 讀取 PDF 內容
with open('pdf_content.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# 找出所有題目
questions = re.findall(r'Q\.\d{3}\..*?(?=Q\.\d{3}\.|$)', content, re.DOTALL)

results = []
for i, question in enumerate(questions[:20], 1):  # 只處理前 20 題
    print(f"\n{'='*60}")
    print(f"題目 {i}:")
    print('='*60)
    
    # 找出題目內容（在選項之前）
    lines = question.split('\n')
    
    # 找到 "答案與說明" 的位置
    answer_section_idx = -1
    for idx, line in enumerate(lines):
        if '答案與說明' in line or '答案：' in line:
            answer_section_idx = idx
            break
    
    if answer_section_idx != -1:
        # 顯示題目內容（選項部分）
        for line in lines[:answer_section_idx]:
            if line.strip():
                print(line)
        
        print("\n--- 答案與說明 ---")
        # 顯示答案與說明部分
        for line in lines[answer_section_idx:answer_section_idx+20]:
            if line.strip():
                print(line)
    else:
        print(question[:500])
    
    print()

print("\n\n請檢查每一題的答案與說明區域，並找出正確答案選項 (A)-(E)")
