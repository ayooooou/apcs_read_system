import PyPDF2
import json

# 開啟 PDF 檔案
pdf_path = r'C程式識讀_bangye_v1.pdf'

try:
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        
        # 讀取所有頁面的文字
        all_text = []
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text = page.extract_text()
            all_text.append(f"===== 第 {page_num + 1} 頁 =====\n{text}\n")
        
        # 將文字儲存到檔案
        with open('pdf_content.txt', 'w', encoding='utf-8') as output:
            output.write('\n'.join(all_text))
        
        print(f"成功提取 {len(pdf_reader.pages)} 頁的內容")
        print("內容已儲存到 pdf_content.txt")
        
except Exception as e:
    print(f"錯誤: {e}")
