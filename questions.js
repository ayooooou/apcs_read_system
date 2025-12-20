const questions = [
  {
    "id": 1,
    "question": "int a=5, b;\nb = 3+a*2-a/2;\na = a+b;\na,b的值為何？",
    "options": [
      "a=7, b=-2",
      "a=16, b=11",
      "a=10, b=5",
      "a=10.5, b=5.5",
      "程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "整數除法、先乘除後加減"
  },
  {
    "id": 2,
    "question": "int a=0, b;\na = (5+2)*(7-2*3);\nb = (a-4*(a-5))*2;\na,b的值為何？",
    "options": [
      "a=7, b=-2",
      "a=105, b=-325",
      "a=51, b=-9",
      "a=0, b=0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "括弧先算、先乘除後加減"
  },
  {
    "id": 3,
    "question": "int a,b=2;\na = 5;\na+3 = b+7;\na,b的值為何？",
    "options": [
      "a=5, b=2",
      "a=5, b=9",
      "a=6, b=2",
      "a=6, b=9",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "指定運算(=)左方必須為變數"
  },
  {
    "id": 4,
    "question": "int q[10],head=0,tail=0;\nvoid push(int c):\n       x\n    return;\n\nint pop():\n    int c = q[head];\n        y\n    return c;\n此程式中q是用來當作一個簡易先進先出的佇列(queue)。push與pop兩函數中所缺的指令x與y應填入下列何者？此處不考慮佇列是空與滿的狀況。",
    "options": [
      "x: q[++tail]=c; y: head++",
      "x: q[tail++]=c; y: head++",
      "x: q[++tail]=c; y: head--",
      "x: q[tail++]=c; y: head--",
      "以上皆非"
    ],
    "correctAnswer": 1,
    "explanation": "queue基本題；head為彈出的位置，tail-1是尾端"
  },
  {
    "id": 5,
    "question": "int a = 2, b;\na = 3.5;\nb = 3/5*5;\na,b的值為何？",
    "options": [
      "a=3, b=3",
      "a=3.5, b=3",
      "a=2, b=0",
      "a=3, b=0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "整數型別截斷；乘除同優先由左至右，整數除法無小數"
  },
  {
    "id": 6,
    "question": "int q[5]={2,-3,6,-2,0},i=0;\nwhile (q[i] != 0) {\n  i = (i+q[i]) %5;\n}\nprintf(\"%d\\n\",i);\n執行結果為何？",
    "options": [
      "輸出4",
      "輸出5",
      "輸出3",
      "無窮迴圈",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "i=0,2,3,1 => (1-3)%5=-2，q[-2]超界"
  },
  {
    "id": 7,
    "question": "int a = 5, b = 3;\nb = a; a = b;\nprintf(\"%d  %d\\n\",a,b);\n輸出為何？",
    "options": [
      "3 5",
      "3 3",
      "5 5",
      "0 0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "依順序執行"
  },
  {
    "id": 8,
    "question": "int s[12]={1,1,-3,2,4,-1,2,3,-5,2,-1,1};\nint q[12], head=0, tail=0, i;\nfor (i=0; i<12; i++) {\n  if (s[i] > 0) q[tail++]  = s[i];\n  else {\n    while (s[i] < 0 && head<tail) {\n      s[i] += q[head++];\n    }\n  }\n}\nint isum = 0;\nfor (i=head;  i<tail; i++) isum += q[i];\nprintf(\"%d\\n\", isum);\n輸出為何？",
    "options": [
      "1",
      "3",
      "4",
      "6",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "queue：正數壓入，負數彈出抵銷；最後剩(2,1)總和=3"
  },
  {
    "id": 9,
    "question": "int p=0,q=0,i;\nchar s[13]=\"axxbcdxefxxg\",t[9];\nfor (i=0; i<12; i++) {\n  if (s[i] == 'x') {\n    if (p < q) p++;\n  } else {\n    t[q++] = s[i];\n  }\n}\nt[q] = '\\0';\nprintf(\"%s\\n\",t+p);\n輸出為何？",
    "options": [
      "efg",
      "cdg",
      "bcg",
      "abcdefg",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "t是queue，p是head；非'x'壓入，'x'彈出；最後印queue字元"
  },
  {
    "id": 10,
    "question": "int p=0,i;\nchar s[13]=\"axxbcdxefxxg\",t[9];\nfor (i=0; i<12; i++) {\n  if (s[i] == 'x') {\n    if (p > 0) { p--; printf(\"%c\",t[p] ); }\n  } else {\n    t[p++] = s[i];\n  }\n}\n輸出為何？",
    "options": [
      "abcd",
      "abcdefg",
      "abefg",
      "adfe",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "t是stack，p為top+1；非'x'壓入，'x'彈出並印出"
  },
  {
    "id": 11,
    "question": "int s[15]={1,1,-3,3,4,-1,2,3,-5,2,1,-1};\nint q[15],t=0, i;\nfor (i=0; i<12; i++) {\n  if (s[i] > 0) q[t++] = s[i];\n  else {\n    while (s[i] < 0 && t > 0) { s[i] += q[--t]; }\n  }\n}\nint total = 0;\nwhile (t>0) total += q[--t];\nprintf(\"%d\", total);\n輸出為何？",
    "options": [
      "1",
      "3",
      "5",
      "7",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "stack：正數壓入，負數彈出抵銷；最後剩(3,2)總和=5"
  },
  {
    "id": 12,
    "question": "int a=3;\nfloat f, x;\nf = a/2 + 0.5;\nx = a/4.0 + 0.5;\nf與x的值為何？",
    "options": [
      "f=2.0, x=1.25",
      "f=2.0, x=0.5",
      "f=1.5, x=0.5",
      "f=1.5, x=1.25",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "a/2=1，f=1.5；a/4.0=0.75，x=1.25"
  },
  {
    "id": 13,
    "question": "int a=4,b=2;\nchar c,d;\nc = 'a'+a;\nd = 5;\nb += d;\nprintf(\"%c,%d\\n\",c,b);\n輸出為何？",
    "options": [
      "a,55",
      "a,7",
      "e,7",
      "e,55",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "'a'+4='e'；char可當整數，5+2=7"
  },
  {
    "id": 14,
    "question": "int a=2,b=5,c=0;\nif (a != 2)\n  if (b < 6) c = 1;\nelse c = 2;\n執行後c的值為何？",
    "options": [
      "0",
      "1",
      "2",
      "不一定",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "else配對到第二個if；此例什麼都沒執行，c=0"
  },
  {
    "id": 15,
    "question": "int a = (10<3) || (4!=2+3);\nint b = (a)? 7: 8;\nint c = (b>7)? 1: 2;\n執行後b,c的值為何？",
    "options": [
      "b=7, c=1",
      "b=7, c=2",
      "b=8, c=1",
      "b=8, c=2",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "三元運算；a為true，b=7；c=2"
  },
  {
    "id": 16,
    "question": "int a=2,b=0,c=0;\nif ((b+1) && (a || b)) {\n  c = 1;\n  if ((a && !b) || (!a && b)) c = 2;\n} else c = 3;\n執行後c的值為何？",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "非0為true，第一個if成立；c=1後第二個if也成立，c=2"
  },
  {
    "id": 17,
    "question": "char a[10]=\"abcd 01\", b[10]=\"xy pq rs\";\nint i=0, j=0;\nwhile (a[i] != '\\0') i++;\nwhile (b[j] != ' ') j++;\nfor (j++; b[j]!=' '; j++) a[i++] = b[j];\na[i] = '\\0';\nprintf(\"%s\", a);\n輸出為何？",
    "options": [
      "abcd pq",
      "abcd pqrs",
      "abcd 01pqrs",
      "abcd 01pq",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "找到b第一個空白，將下一個空白之前的字抄到a尾端"
  },
  {
    "id": 18,
    "question": "char a[9]=\"0x3f2\";\nint t = 0;\nfor (int i=0; i<9 && a[i]; i++) {\n  if (a[i]>='0'  && a[i]<='9') t = t*10 + a[i]-'0';\n}\nprintf(\"%d\",t+10);\n輸出為何？",
    "options": [
      "1020",
      "42",
      "3210",
      "60",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "將字串中的數字取出轉整數；0x只是幌子"
  },
  {
    "id": 19,
    "question": "char a[] = \"fake\";\nint b = a[3]-a[1];\nchar c = 'd' + b;\n執行後b,c的內容為何？",
    "options": [
      "b=5, c='i'",
      "b=5, c='d'",
      "b=4, c='h'",
      "b=4, c='d'",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "index從0開始；'e'-'a'=4；'d'+4='h'"
  },
  {
    "id": 20,
    "question": "char a[9]=\"ab cde\",b[9];\nint i=0,j;\nwhile (a[i]) i++;\nfor (j=0, i--; i>=0; i--,j++) b[j] = a[i];\nb[j] = '\\0';\nprintf(\"%s\",b);\n輸出為何？",
    "options": [
      "edc ba",
      "ba",
      "ba edc",
      "cde ab",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "將a反轉放入b"
  }
]
