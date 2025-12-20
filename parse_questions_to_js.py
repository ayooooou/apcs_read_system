import re
import json

with open('pdf_content.txt','r',encoding='utf-8') as f:
    content = f.read()

# Split into question blocks starting from the answers section where formatting is consistent
blocks = re.split(r'\nQ\.(\d{3})\.', content)
# re.split keeps delimiters; pair id with block text
pairs = []
for i in range(1, len(blocks), 2):
    qid = int(blocks[i])
    text = blocks[i+1]
    pairs.append((qid, text))

answer_map = {'A':0,'B':1,'C':2,'D':3,'E':4}
questions = []

for qid, block in pairs:
    if qid > 20:
        break
    # Extract options lines
    opt_lines = re.findall(r'^\((A|B|C|D|E)\)\s*(.*)$', block, re.MULTILINE)
    options = [None]*5
    for letter, text in opt_lines:
        options[answer_map[letter]] = text.strip()
    # Extract explanation line that starts with (X)
    expl_match = re.search(r'答案與說明[：:]\s*\n\((A|B|C|D|E)\)\s*(.*?)(?:\n|$)', block)
    correct_letter = None
    explanation = ''
    if expl_match:
        correct_letter = expl_match.group(1)
        explanation = expl_match.group(2).strip()
    else:
        # fallback: find first line starting with (X) after 答案與說明
        after = re.split(r'答案與說明[：:]', block)
        if len(after) > 1:
            tail = after[1]
            m2 = re.search(r'^\((A|B|C|D|E)\)\s*(.*)$', tail, re.MULTILINE)
            if m2:
                correct_letter = m2.group(1)
                explanation = m2.group(2).strip()
    # Extract question text: substring before first option line
    m_head = re.search(r'^\(A\)', block, re.MULTILINE)
    if m_head:
        question_text = block[:m_head.start()].strip()
    else:
        question_text = block.strip()
    # Build object
    if None in options or correct_letter is None:
        # Skip if incomplete
        continue
    questions.append({
        'id': qid,
        'question': question_text,
        'options': options,
        'correctAnswer': answer_map[correct_letter],
        'explanation': explanation
    })

# Write JS file
js_path = 'questions.js'
with open(js_path, 'w', encoding='utf-8') as f:
    f.write('const questions = '+json.dumps(questions, ensure_ascii=False, indent=2))

print(f'Generated {len(questions)} questions to {js_path}')
