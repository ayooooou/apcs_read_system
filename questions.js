const questions = [
  {
    "id": 1,
    "question": "int a=5, b;\nb = 3+a*2-a/2;\na = a+b;\na,b的值為何？",
    "options": [
      "a=15.5, b=10.5",
      "a=16, b=11",
      "a=10, b=5",
      "a=10.5, b=5.5",
      "程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "整數除法、先乘除後加減",
    "difficulty": "易"
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
    "explanation": "括弧先算、先乘除後加減",
    "difficulty": "易"
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
    "explanation": "指定運算(=)左方必須為變數",
    "difficulty": "易"
  },
  {
    "id": 4,
    "question": "int q[10],head=0,tail=0;\nvoid push(int c):\n     ___x___\n    return;\n\nint pop():\n    int c = q[head];\n      ___y___\n    return c;\n此程式中q是用來當作一個簡易先進先出的佇列(queue)。push與pop兩函數中所缺的指令x與y應填入下列何者？此處不考慮佇列是空與滿的狀況。",
    "options": [
      "x: q[++tail]=c; y: head++",
      "x: q[tail++]=c; y: head++",
      "x: q[++tail]=c; y: head--",
      "x: q[tail++]=c; y: head--",
      "以上皆非"
    ],
    "correctAnswer": 1,
    "explanation": "queue基本題；head為彈出的位置，tail-1是尾端",
    "difficulty": "中"
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
    "explanation": "整數型別截斷；乘除同優先由左至右，整數除法無小數",
    "difficulty": "易"
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
    "explanation": "i=0,2,3,1 => (1-3)%5=-2，q[-2]超界",
    "difficulty": "中"
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
    "explanation": "依順序執行",
    "difficulty": "易"
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
    "explanation": "queue：正數壓入，負數彈出抵銷；最後剩(2,1)總和=3",
    "difficulty": "難"
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
    "explanation": "t是queue，p是head；非'x'壓入，'x'彈出；最後印queue字元",
    "difficulty": "中"
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
    "explanation": "t是stack，p為top+1；非'x'壓入，'x'彈出並印出",
    "difficulty": "中"
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
    "explanation": "stack：正數壓入，負數彈出抵銷；最後剩(3,2)總和=5",
    "difficulty": "難"
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
    "explanation": "a/2=1，f=1.5；a/4.0=0.75，x=1.25",
    "difficulty": "易"
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
    "explanation": "'a'+4='e'；char可當整數，5+2=7",
    "difficulty": "易"
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
    "explanation": "else配對到第二個if；此例什麼都沒執行，c=0",
    "difficulty": "易"
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
    "explanation": "三元運算；a為true，b=7；c=2",
    "difficulty": "易"
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
    "explanation": "非0為true，第一個if成立；c=1後第二個if也成立，c=2",
    "difficulty": "易"
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
    "explanation": "找到b第一個空白，將下一個空白之前的字抄到a尾端",
    "difficulty": "中"
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
    "explanation": "將字串中的數字取出轉整數；0x只是幌子",
    "difficulty": "中"
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
    "explanation": "index從0開始；'e'-'a'=4；'d'+4='h'",
    "difficulty": "易"
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
    "explanation": "將a反轉放入b",
    "difficulty": "中"
  },
  {
    "id": 21,
    "question": "struct mystruct { \n    int x,y; \n} s1={1,3},s2={2,4}; \ns1.x = 0; \ns2.y = s1.x+s1.y; \nprintf(\"{%d,%d},  {%d,%d}\",  s1.x, s1.y, \ns2.x, s2.y); \n輸出為何？",
    "options": [
      "{0,0}, {2,0}",
      "{1,3}, {2,4}",
      "{0,3}, {2,4}",
      "{0,3}, {2,3}",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "struct 的用法與存取",
    "difficulty": "易"
  },
  {
    "id": 22,
    "question": "struct mystruct { \n    int x,y; \n} s1={1,3},s2={1,4}; \nif (s1.x == s2.x) \n    s2 = s1; \nprintf(\"%d  %d\", s1.y, s2.y);",
    "options": [
      "3 3",
      "4 4",
      "3 4",
      "4 3",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "struct 可以用=",
    "difficulty": "易"
  },
  {
    "id": 23,
    "question": "struct mystruct { \n    int x[5]; \n} s1={{1,2,3,4,5}},s2; \ns2 = s1; \ns2.x[0] = 9; \nprintf(\"%d  %d\", s1.x[0], s2.x[0]); \n輸出為何？",
    "options": [
      "1 1",
      "1 9",
      "9 9",
      "9 1",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "struct可以用 =運算，即使成員是陣列",
    "difficulty": "中"
  },
  {
    "id": 24,
    "question": "int a=1, b=5; \nint *p, *q; \np = &a; \na += 2; \nq = &b; \n*q += *p; \nprintf(\"%d %d\",*p, b); \n輸出為何？",
    "options": [
      "3 8",
      "3 6",
      "1 5",
      "3 5",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "指標基本使用",
    "difficulty": "易"
  },
  {
    "id": 25,
    "question": "char a[9]=\"python\", b[9]=\"prog\"; \nb = a; \nprintf(\"%s\", b); \n輸出為何？",
    "options": [
      "python",
      "prog",
      "pythonprog",
      "輸出空字串",
      "以上皆非或程式有錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "字串(字元陣列)無法指定新位置，編譯會出現錯誤",
    "difficulty": "易"
  },
  {
    "id": 26,
    "question": "char a[9]=\"python\",  b[9]=\"prog\"; \nb += a; \nprintf(\"%s\", b); \n輸出為何？",
    "options": [
      "progpython",
      "python",
      "prog",
      "pythonprog",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "陣列不可用 b += a",
    "difficulty": "易"
  },
  {
    "id": 27,
    "question": "int a=0; \nfloat b=1; \na = 1.2 + 10*3.5 + 1.95; \nb = (1+3/2)*10.0; \nif (b < 21) a += 10; \nprintf(\"%d\", a); \n輸出為何？",
    "options": [
      "48",
      "47",
      "38",
      "37",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "10*3.5 會以float計算得到35.0，因此計算加法十前後兩個都是浮點數，得到38.15，指定給a時再轉為整數 a=38。計算b時，(1+3/2)內部皆整數，所以得到2，再乘以10.0時變成20.0。因此if會執行a變成48",
    "difficulty": "中"
  },
  {
    "id": 28,
    "question": "int a[5]={1},*p, s=0; \np = a; \nfor (int i=0; i<5; i++,p++) { \n    if (*p == 0) *p = -1; \n    s += *p; \n} \nprintf(\"%d %d\", s, a[2]); \n則輸出為何？",
    "options": [
      "5 1",
      "5 0",
      "-3 -1",
      "-5 -1",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "陣列初始給值比較少，後面的是0，所以a[1]到a[4]都是0。後面迴圈將陣列中的 0改成-1，s是陣列全部的值相加。陣列是[1,-1,-1,-1,-1]，s=-3",
    "difficulty": "易"
  },
  {
    "id": 29,
    "question": "int w=5, s=0, a=-1; \nif (s) { \n    if (w < 7) a = 0; \n    else a = 1; \n} else if (0<w && w<7) { \n    a = (s)? 2: 3; \n} else { \n    a = 4; \n} \nprintf(\"%d\", a%4); \n輸出為何？",
    "options": [
      "1",
      "2",
      "3",
      "0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "if 判斷，0是false，故第一個if不成立，第二個else if成立，s==0所以(s)為假，a=3",
    "difficulty": "易"
  },
  {
    "id": 30,
    "question": "int a = 3; \nchar s='e'; \nif (2<a && a<5) \n    s += 2; \nif (s == 'g') \n    a += 5; \nelse a = 0; \nprintf(\"%d %c\", a, s); \n輸出為何？",
    "options": [
      "8 e",
      "8 g",
      "0 e",
      "3 g",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "第一個if會成立，第 2個if也成立",
    "difficulty": "易"
  },
  {
    "id": 31,
    "question": "int a=3, s=5; \nif (2<a && a<5) { \n    s -= 4; \n    if (s == 2) \n        a += 5; \n} else a = 0; \nprintf(\"%d %d\", a,s); \n輸出為何？",
    "options": [
      "8 1",
      "0 1",
      "0 5",
      "3 1",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "else是跟第一個 if，第一個if成立，s=1，內部if不成立，所以 a=3,s=1",
    "difficulty": "易"
  },
  {
    "id": 32,
    "question": "int t = 0, i; \nfor (i=0; i<10; i++) { \n     if (i%3 == 1) \n        t += 1; \n} \nprintf(\"%d\", t); \n輸出為何？",
    "options": [
      "0",
      "3",
      "4",
      "10",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "i=1,4,7 時if成立，t加1三次",
    "difficulty": "易"
  },
  {
    "id": 33,
    "question": "int t=0; \nfor (int i=0; i<100; i+=2) { \n     if (i%3 == 0) \n        t += i; \n} \nprintf(\"%d\", t); \n輸出為何？",
    "options": [
      "16",
      "816",
      "1683",
      "4950",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "i是0,2,4,.. ，3的倍數加起來，所以t=0+6+12+…+96 = (6+96)*16/2=816",
    "difficulty": "易"
  },
  {
    "id": 34,
    "question": "int t = 0,i; \nfor (i=0; i<10; i++) { \n    if (i%2==0)  continue; \n    t += i; \n    if (t > 2*i) break; \n} \nprintf(\"%d %d\",t,i); \n輸出為何？",
    "options": [
      "10 4",
      "45 10",
      "16 7",
      "25 9",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "偶數跳過， (t,i)值的變化是 (1 1); (4 3); (9 5); (16 7); 16>2*7 故離開迴圈",
    "difficulty": "中"
  },
  {
    "id": 35,
    "question": "int t = 0,i; \nfor (i=0; i<10; t += i++); \nt = (t%6 == 0)? t + 10: t + t; \nprintf(\"%d\",t); \n輸出為何？",
    "options": [
      "45",
      "55",
      "90",
      "110",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "for的迴圈內是空指令 ， 運算寫在 for指令內部， t每次會把i加進來，所以 t是45。三元運算 (條件運算)，t%6==0不成立，所以進行  t+t指定給t，結果是90",
    "difficulty": "易"
  },
  {
    "id": 36,
    "question": "int f(int a,int b,int c) { \n    if (   ?    ) \n        return 1; \n    else return 0; \n} \n此函數定義為：檢查 以a,b,c是否為直角三角形的三邊長，其中已知 c為最大值 。請問程式中的 ?處填入下列何者 最為合適 ？",
    "options": [
      "(a^2 + b^2) == c^2",
      "a^2 + b^2 == c^2",
      "sqrt(a*a + b*b) == c",
      "a*a + b*b == c*c",
      "以上皆非"
    ],
    "correctAnswer": 3,
    "explanation": "平方可以寫 a*a，a^2是exclusive or。(C)是不恰當的，因為把浮點數與整數做 ==",
    "difficulty": "易"
  },
  {
    "id": 37,
    "question": "int f(int a){ \n    int i = 0; \n    while (a%10 == 0) { \n        i++; \n           ?   ; \n    } \n    return i; \n} \n此函數定義為：  保證傳入的 a是一個正整數，回傳a的結尾有幾個 0(十進制)，例如10300的結尾有2個0。請問程式中的 ?處應填入下列何者？",
    "options": [
      "a -= 10",
      "a/10",
      "a /= 10",
      "a >> 1",
      "以上皆非"
    ],
    "correctAnswer": 2,
    "explanation": "每次除以10",
    "difficulty": "中"
  },
  {
    "id": 38,
    "question": "int t1 = 1, t2 = 1, s; \nwhile (t2 <= 10000) { \n       ?           \n} \nprintf(\"%d\", t2); \n費式數列的定義為： f(1)=f(2)=1 ，對i>2，f(i)=f(i-1)+f(i-2)。 此程式要計算第一個大於 10000的費式數，程式中的?處應填入下列何者？",
    "options": [
      "t1=t2; t2=t1+t2 ;",
      "s=t2; t1=t2; t2=t1+t2;",
      "s=t1; t1=t2; t2=s;",
      "s=t1; t1=t2; t2=s+t1;",
      "以上皆非"
    ],
    "correctAnswer": 3,
    "explanation": "t1=t2後t1的值會不見，所以先將t1暫存在s，再指定給t2相加。如果寫 t2 += t1; t1 = t2-t1; 也是對的答案，但這個比較難一點",
    "difficulty": "中"
  },
  {
    "id": 39,
    "question": "int t = 0, i; \nfor (i=0; i<10; i++) { \n    if (i%2 == 1) \n        i += 2; \n    t += i; \n} \nprintf(\"%d\", t); \n輸出為何？",
    "options": [
      "33",
      "45",
      "55",
      "35",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "i=0，t=0；i=1 → 變3，t=3，迴圈尾i++ i=4，t=7，i++ i=5，變7，t=14，i++ i=8，t=22, i++ i=9，變11，t=33",
    "difficulty": "中"
  },
  {
    "id": 40,
    "question": "int t = 0; \nwhile (t<20) { \n    if (t%2) t *= 2; \n    else t += 1; \n} \nprintf(\"%d\", t); \n輸出為何？",
    "options": [
      "0",
      "20",
      "30",
      "32",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "t是奇數的話加倍，偶數加一， t = 0,1,2,3,6,7,14,15,30",
    "difficulty": "中"
  },
  {
    "id": 41,
    "question": "int t = 5; \nwhile (t<20) { \n    t += t//2; \n    if (t%3 == 0) \n        break; \n} \nprintf(\"%d\",t); \n輸出為何？",
    "options": [
      "22",
      "5",
      "15",
      "20",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "t=5,7,10 ,15",
    "difficulty": "中"
  },
  {
    "id": 42,
    "question": "int t = 208140759; \nwhile (t > 9) { \n    int s = 0; \n    while (t) { \n        s += t%10; \n        t /= 10; \n    } \n    t = s; \n} \nprintf(\"%d\",  t); \n輸出為何？",
    "options": [
      "0",
      "9",
      "6",
      "3",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "每次將各個位數相加，直到剩下一位數。t=36, 9",
    "difficulty": "中"
  },
  {
    "id": 43,
    "question": "int t = 0, i, j; \nfor (i=0; i<10; i++) { \n    for (j=1; j<10; j+=2) { \n        if ((i+j)%5  == 0) \n            t++; \n    } \n} \nprintf(\"%d\",  t); \n輸出為何？",
    "options": [
      "0",
      "5",
      "10",
      "50",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "j的變化是(1,3,5,7,9 )，j%5=(1,3,0,2,4) 也就是對於 任何i，恰有一個相加後為 5的倍數，所以 答案是10",
    "difficulty": "難"
  },
  {
    "id": 44,
    "question": "int cnt = 0; \nfor (int t=9; t<50; t+=10) { \n    int flag=1; \n    for (int i=2; i<t; i++) { \n        if (t%i == 0) \n            flag = 0; \n    } \n    cnt += flag; \n} \nprintf(\"%d\", cnt); \n輸出為何？",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "迴圈內為檢驗 t是否為質數的程序，外面被檢測的 (9, 19, 29, 39, 49)中有2個質數",
    "difficulty": "難"
  },
  {
    "id": 45,
    "question": "int k = 0,i; \nfor (i=1; i<20; i+=3) { \n    k += i; \n    for (i=0; i<3; i++) { \n        k -= i; \n    } \n} \nprintf(\"%d\",  k); \n輸出為何？",
    "options": [
      "49",
      "0",
      "70",
      "28",
      "以上皆非或 程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "內迴圈誤用外迴圈的 i，所以會導致無窮迴圈",
    "difficulty": "中"
  },
  {
    "id": 46,
    "question": "int k = 0,i; \nfor (i=1; i<20; i+=3) { \n    k += i; \n    for (int i=0; i<3; i++) { \n        k -= i; \n    } \n} \nprintf(\"%d\",  k); \n輸出為何？",
    "options": [
      "49",
      "0",
      "70",
      "28",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "內迴圈的i是區域變數與外迴圈的 i無關，內迴圈每次減去 3，k的值是1 + 4 + 7 …+19=70, 70-7*3=49",
    "difficulty": "中"
  },
  {
    "id": 47,
    "question": "int a[9]={3,5,1,0,7,3,2,0,9}; \nint *p, s; \nfor (p=a; *p; p++); \nfor (s=0, p++; *p; p++) \n    s += *p; \nprintf(\"%d\",  s); \n輸出為何？",
    "options": [
      "9",
      "21",
      "12",
      "30",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "找到第一個 0，從下一個開始加，直到碰到第二個 0為止。也就是第一與第二個 0之間的數字和",
    "difficulty": "中"
  },
  {
    "id": 48,
    "question": "若宣告為 int a[100], *p=a; \n考慮以下指令 ： \n(1) *p+1 = 5; \n(2) *(p+1) = 5; \n(3) p += 100; *p = 5; \n(4) a += 3; *a = 5; \n有幾組指令會導致錯誤 或陣列超界 ？",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "(1)(4)是錯的，(3)會超界",
    "difficulty": "中"
  },
  {
    "id": 49,
    "question": "int a[9]={2,-3,-1,6,0,3,5,6,8 },t=0; \nfor (int i=0; i<9; i++) { \n    if (a[i] == 0) break; \n    if (a[i]%2) { \n        t *= 2; \n    } else { \n        t += 1; \n    } \n} \nprintf(\"%d\",  t); \n輸出為何？",
    "options": [
      "4",
      "5",
      "42",
      "50",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "偶數t加一，奇數 t乘2，遇到0離開，t值0,1,2,4,5",
    "difficulty": "中"
  },
  {
    "id": 50,
    "question": "int a[3][4] = {{2,-3,-1}, {-3,3,4,6}}; \nint t = 0,i,j; \nfor (i=0,j=3;  i<3; i++,j--) { \n    t += a[i][i]-a[i][j]; \n} \nprintf(\"%d\",  t); \n輸出為何？",
    "options": [
      "0",
      "1",
      "2",
      "4",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "對角線相加減去右上左下的反對角線，陣列初始未給值的是 0",
    "difficulty": "易"
  },
  {
    "id": 51,
    "question": "int p[21] = {0},i,j,s=0; \nfor (i=2; i<21; i++) { \n    if (p[i]) continue ; \n    s++; \n    for (j=i+i; j<21; j+= i) { \n        p[j] = 1; \n    } \n} \nprintf(\"%d\",  s); \n輸出為何？",
    "options": [
      "8",
      "9",
      "10",
      "11",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "找質數，20以內的質數個數 (2, 3, 5, 7, 11, 13, 17, 19)共八個",
    "difficulty": "中"
  },
  {
    "id": 52,
    "question": "int a[8] = {8,3,1,5,0,7,4,2 },i,j; \nfor (j=0; j<3; j++) { \n    for (i=1; i<8; i++) { \n        if (a[i-1] > a[i]) { \n            int t = a[i-1]; \n            a[i-1] = a[i]; \n            a[i] = t; \n        } \n    } \n} \n執行後a的內容為何 ？",
    "options": [
      "[0,1,2,3,4,5,7,8]",
      "[3,1,0,4,2,5,7,8]",
      "[1,0,3,4,5,2,7,8]",
      "[1,0,3,4,2,5,7,8]",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "此為bubble sort前三回合 [3,1,5,0,7,4,2,8] [1,3,0,5,4,2,7,8] [1,0,3,4,2,5,7,8 ]",
    "difficulty": "中"
  },
  {
    "id": 53,
    "question": "int a[4]={8,4,3,1} , b[3]={0,4,5},d[7]; \nint ai=3, di=0; \nfor (int bi=0; bi<3; bi++) { \n    while (ai>=0 && a[ai] <= b[bi]) \n        d[di++] = a[ai--]; \n    d[di++] = b[bi]; \n} \nwhile (ai >= 0) d[di++] = a[ai--]; \n\n執行後d的內容為何 ？",
    "options": [
      "[0,1,4,3,5,4,8]",
      "[0,1,3,4,4,5,8]",
      "[0,4,5,1,3,4,8]",
      "[1,3,4,8,0,4,5]",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "a是遞減， b是遞增，合併成sorted list",
    "difficulty": "中"
  },
  {
    "id": 54,
    "question": "考慮下面的程式片段 ， int a[4]=?, b[4]=?,d[8]; \nint ai=0, di=0; \nfor (int bi=0; bi<4; bi++) { \n    while (ai<4 && a[ai] <= b[bi]) \n        d[di++] = a[ai++]; \n    d[di++] = b[bi]; \n} \n此程式是想要將 a,b兩個遞增序列合併成一個遞增序列d，但此程式有個錯誤，請問下列哪一組測資放在第一行的 ?處，可以使得 d不是想要的結果？",
    "options": [
      "a[4]={0,0,0,0} , b[4]={1,4,5,6}",
      "a[4]={1,2,3,4}, b[4]={5,6,7,8}",
      "a[4]={3,4,7,9}, b[4]={1,2,5,8}",
      "a[4]={1,3,5,7}, b[4]={0,0,0,0}",
      "以上皆非"
    ],
    "correctAnswer": 2,
    "explanation": "for之後漏了將a的剩下部份放進d的尾端 所以a中>b[3]的部份沒有在 d中，選項中只有 (C)有此情形",
    "difficulty": "難"
  },
  {
    "id": 55,
    "question": "int a[4][2]={{-1,-2},{1,2},{5,-4},{-3,1}}; \nint d[10],i,j,k=0; \nfor (i=0; i<4; i++) { \n    for (j=0; j<2; j++) { \n        if (a[i][j]  < 0) continue; \n        d[k++] = a[i][j]; \n    } \n} \nprintf(\"%d  %d %d\", k,d[1],d[3] ); \n輸出為何？",
    "options": [
      "8 -1 1",
      "4 2 1",
      "4 -2 -3",
      "4 1 5",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "每個以row-major方式將非負元素放進 d，k是d中元素個數",
    "difficulty": "中"
  },
  {
    "id": 56,
    "question": "int a[8]={4,3,6,5,0,8,9,2}; \nint t1=-1, t2=-1; \nfor (int i=0; i<8; i++) { \n    if (a[i]%2) continue ; \n    if (a[i] > t1) { \n        t2 = t1; t1 = a[i]; \n    } else if (a[i] > t2) { \n        t2 = a[i]; \n    } \n} \nprintf(\" %d %d\", t1,t2); \n輸出為何？",
    "options": [
      "9 8",
      "6 4",
      "8 6",
      "8 4",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "找第二大偶數。 t1,t2是存最大與第二大偶數",
    "difficulty": "中"
  },
  {
    "id": 57,
    "question": "int a[4] = {1,2,3,4}, c[4]; \nint *b = a; \nfor (int i=0; i<4; i++) \n    c[i] = a[3-i]; \nb[1] = 0; \nprintf(\"%d  %d %d\", a[1],b[1],c[1]); \n輸出為何？",
    "options": [
      "0 0 3",
      "2 0 3",
      "0 0 2",
      "1 2 2",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "a,b指向同一 陣列，c是被複製出來a的反轉",
    "difficulty": "中"
  },
  {
    "id": 58,
    "question": "int k = ?, a[7]={3,1,4,7,2,6,5}, t[7],i; \nfor (i=0; i<k; i++) t[i]=a[i]; \nfor (i=k; i<7; i++) a[i-k] = a[i]; \nfor (i=0; i<k; i++) a[7-k+i] = t[i]; \n以下選項中 k的初值與 執行後a陣列的內容 的敘述何者正確？",
    "options": [
      "若k=0，則a={3,5,1,6,4,2,7}",
      "若k=2，則a={4,3,1,7,2,6,5}",
      "若k=4，則a={2,6,5,7,4,1,3 }",
      "若k=5，則a={6,5,3,1,4,7,2 }",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "把a看成環狀， 向左旋轉k格",
    "difficulty": "難"
  },
  {
    "id": 59,
    "question": "int total=0, imax=0, i; \nfor (i=0; i<16; i++) { \n    int cnt=0, j=i; \n    while (j > 0) { \n        if (j&1) cnt++; \n        j >>= 1; \n    } \n    if (cnt > imax) imax = cnt; \n    total += cnt; \n} \nprintf(\"%d  %d\", imax, total); \n輸出為何？",
    "options": [
      "5 30",
      "4 30",
      "4 32",
      "4 34",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "迴圈內是計算二進位表示時 1-bit的個數，imax是最大，所以是 4 (i=15, 1111)，total要計算1-bit總數，每個bit剛好有一半是 1，所以total = 4*(16/2)=32",
    "difficulty": "難"
  },
  {
    "id": 60,
    "question": "int a = (10 << 3); \nint b = (a&(a-1)); \nprintf(\"%d\",  a-b); \n輸出為何？",
    "options": [
      "0",
      "16",
      "32",
      "64",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "由二進位表示法去看 a = 1010 << 3 = 1010000 b = 1000000 a-b 就是10000 = 16 a&(a-1)是去除最後一個 1",
    "difficulty": "難"
  },
  {
    "id": 61,
    "question": "int k = 0b? \nint a[8] = {8,3,1,5,0,7,4,2 },t = 0; \nfor (int i=0; i<8; i++) { \n    if (k & (1<<i)) \n        t += a[i]; \n} \nprintf(\"%d\",  t); \n註： 0b是二進位表示的意思，例如 0b1101 就是十進制整數13。 以下選項中 k的初值與輸出的敘述何者錯誤 ？",
    "options": [
      "若k=0b00000101，則輸出為 9",
      "若k=0b10100010 ，則輸出為 12",
      "若k=0b10000001 ，則輸出為10",
      "若k=0b00110000，則輸出為 6",
      "以上皆無錯誤或 程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "k的二進位表示中 1-bit的位置就是a中要被加入總和的元素 ，例如k=0b101，t=a[0]+a[2] 。要注意高位元與低位元的位置。(D)錯誤，因為 t=a[4]+a[5]=7",
    "difficulty": "中"
  },
  {
    "id": 62,
    "question": "int chk(char s[], int n) { \n    for (int i=0,j=n-1; i<j; i++,j--) { \n        if (s[i] != s[j]) \n            return 0; \n    } \n    return 1; \n} \n以下選項中 的函數呼叫 與回傳值的敘 述何者錯誤？",
    "options": [
      "chk(\"xxarx\",5)回傳1",
      "chk(\"a\",1)回傳1",
      "chk(\"abba\",4)回傳1",
      "chk(\"abab\",4 )回傳0",
      "以上皆無錯誤或 程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "此函數判斷字串是否為迴文",
    "difficulty": "中"
  },
  {
    "id": 63,
    "question": "char chk(char *s, char *t) { \n    for ( ; *s; s++,t++) { \n        if (*s != *t) \n            return *s; \n    } \n    return '?'; \n} \n以下程式 char p=chk(\"axarc\",\"axabc\"), \nq=chk(\"qwerty\",\"qwer\"), \nr=chk(\"d s\",\"dst\"); \nprintf(\"%c%c%c\",p,q,r); \n輸出為何 ？",
    "options": [
      "ats",
      "a?s",
      "r??",
      "rt?",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "回傳s中第一個與t中不同的字元，若找不到，回傳 ?",
    "difficulty": "中"
  },
  {
    "id": 64,
    "question": "int a = 3; \nint f(int k) { \n    int a = 4; \n    k += 2; \n    return a+k; \n} \nint main() { \n    int b = 1, c = f(b)+a; \n    printf(\"%d  %d\", b,c); \n    return 0; \n} \n輸出為何 ？",
    "options": [
      "3 11",
      "1 10",
      "1 11",
      "3 10",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "a,b值不會改變，副程式內的a是區域變數",
    "difficulty": "易"
  },
  {
    "id": 65,
    "question": "int a = 3; \nint f(int *k) { \n    a = 4; \n    *k += 2; \n    return a+(*k); \n} \nint main() { \n    int b = 1; \n    int c = f(&b)+a; \n    printf(\"%d  %d\", b,c); \n    return 0; \n} \n輸出為何 ？",
    "options": [
      "1 11",
      "1 10",
      "3 10",
      "3 11",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "函數內的a是全域變數，*k是傳址變數會變動 ，呼叫後a=4, c=7+4=11, b=3",
    "difficulty": "中"
  },
  {
    "id": 66,
    "question": "int a = 3, b = 1; \nint f(int a) { \n    a += 2; \n    b = 4; \n    return a+b; \n} \nint main() { \n    int a=5; \n    int c = f(b)+a; \n    printf(\"%d  %d\", b,c); \n    return 0; \n} \n\n輸出為何 ？",
    "options": [
      "1 14",
      "4 14",
      "4 12",
      "1 12",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "函數f內的a是參數，算是區域變數，傳進來是 b=1，所以a+=2變成3，函數f內b是全域變數，值改成4。回傳7。main中的a是區域變數，值是 5，所以c=12。全域的b值在f中改成4",
    "difficulty": "中"
  },
  {
    "id": 67,
    "question": "int f(int p, int q[]) { \n    p += 2; \n    q[0] = 0; \n    return p+q[0]+q[1]; \n} \nint main() { \n    int a=3, b[3] = {1,2,0}; \n    int d = f(a,b+1); \n    printf(\"%d  %d %d\",a,d,b[0]+b[1] ); \n    return 0; \n} \n輸出為何 ？",
    "options": [
      "5 7 2",
      "3 7 2",
      "3 5 1",
      "3 7 1",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "傳進來p=3，q的位置是b[1]，所以b[1]被改成0， 回傳5+0+0=5 ，a值不會改變， b改成[1,0,0]",
    "difficulty": "中"
  },
  {
    "id": 68,
    "question": "char *f(char t[], char *s, int k) { \n    int i, j=0; \n    for (i=0; i<k; i++) { \n        for (      ?        ) \n            t[j] = *p; \n    } \n    t[j] = '\\0'; \n    return t; \n} \n此函數將字串複製 k次放在t，例如呼叫 f(t,\"tle\",2) 後t的內容會是 \"tletle\" 。程式中for迴圈的?部份應該填入下列何者？",
    "options": [
      "j=0; j<n; j++",
      "char *p=s; *p; p++,j++",
      "char p=*s; p!='\\0'; p++,j++",
      "char *p=s; *p; p++",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "內迴圈在複製一次 s，而j是複製寫入的位置 ， 每次回圈不重置 j。此處的寫法是用指標歷遍 s",
    "difficulty": "中"
  },
  {
    "id": 69,
    "question": "int f(char s[]) { \n    int cnt[26]={0},  imax=0; \n    for (char *p=s; *p; p++) { \n        if (*p<'a' || *p>'z') \n            return -1; \n        cnt[*p - 'a']++; \n    } \n    for (int i=0; i<26; i++) { \n        if (cnt[i]>imax)  imax = cnt[i]; \n    } \n    return imax; \n} \n以下選項中傳入值 s與回傳值的敘述何者錯誤 ？",
    "options": [
      "f(\"xxBarx\")回傳-1",
      "f(\"abccbac\")回傳3",
      "f(\"waxyz\" )回傳1",
      "f(\"aaaaabbbb \")回傳5",
      "以上皆無錯誤或 程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "函數計算最多出現的字母次數，若有非小寫字母回傳 -1。選項皆無錯誤",
    "difficulty": "中"
  },
  {
    "id": 70,
    "question": "int g(int x, int y) { \n    if (y == 0) return x; \n    if (x >= y) return g(x-y,y); \n    return g(y,x); \n} \n以下程式 int a[4]={3,5,12,18},ans = 0; \nfor (int i=0; i<3; i++) { \n    ans += g(a[i],a[i+1]) ; \n} \nprintf(\"%d\", ans); \n輸出為何 ？",
    "options": [
      "3",
      "8",
      "10",
      "12",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "此函數為gcd，a中相鄰數的gcd分別是1,1,6，總和8",
    "difficulty": "難"  },
  {
    "id": 71,
    "question": "int g(int x, int y) { \n    if (x < 2) return y; \n    return g(x-2,y+1); \n} \n以下程式 \nint a[4]={1,5,20,8}, b[4]={3,1,20,0};  \nint ans=0; \nfor (int i=0; i<4; i++)  \n    ans += g(a[i],b[i]) ; \nprintf(\"%d\", ans); \n輸出為何 ？",
    "options": [
      "40",
      "45",
      "52",
      "58",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "推理函數所做的運算，每次 x-2，y+1，(皆非負)，所以此函數回傳是y+x//2， 3+(1+2)+(20+10)+4= 40",
    "difficulty": "中"
  },
  {
    "id": 72,
    "question": "int g(int x, int y) { \n    int t = 0; \n    while (x > 1 && y > 0) { \n        t++; x -= 2; y--; \n    } \n    return t; \n} \n以下程式 \nint a[4]={1,5,20,9},  b[4]={3,1,11,4};  \nint ans=0; \nfor (int i=0; i<4; i++)  \n    ans += g(a[i],b[i]);  \nprintf(\"%d\", ans); \n輸出為何 ？",
    "options": [
      "17",
      "16",
      "15",
      "14",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "每次x-2，y-1，(皆非負)所以函數回傳是 min(x/2,y)  ans= min(1/2,3) + min(5/2,1) + min(20/2,11) + min(9/2,4) = 0+1+10+4=15",
    "difficulty": "中"
  },
  {
    "id": 73,
    "question": "int g(int d) { \n    if (d%2 == 0) return f(d/2)+1 ; \n    return f(d); \n} \nint f(int d) { \n    if (d == 1) return 0; \n    if (d%2) return g(3*d+1)+1 ; \n    return g(d); \n} \n若ans = f(1)+f(2)+f(3)+f(4) ，則ans的值為何？",
    "options": [
      "7",
      "8",
      "9",
      "10",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "此函數是3n+1，即偶數除以 2奇數變3n+1，回傳經過幾回合變成1，輸入3時 (3,10,5,16,8,4,2,1) ，7回合。ans= 0+1+7+2=10",
    "difficulty": "難"
  },
  {
    "id": 74,
    "question": "int g(int d[], int n) { \n    int t=0; \n    for (int i=0; i<n; i++) { \n         t += d[i]; \n         d[i] = i; \n    } \n    return t; \n} \n以下程式 \nint *p; \nint x=g(p, 10); \nprintf(\"%d  %d\", x,p[3]); \n輸出為何 ？",
    "options": [
      "0 3",
      "0 0",
      "45 3",
      "45 0",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "指標p未初始化記憶體，存取d[i]是未定義行為，屬於程式錯誤",
    "difficulty": "中"
  },
  {
    "id": 75,
    "question": "void g(int s[], int le, int ri) { \n    if (le >= ri) return; \n    for (int i=le+1; i<ri; i++) { \n        if (s[i] > s[le]) le = i; \n    } \n    printf(\"%d  \", s[le]); \n    g(s, le+1, ri); \n} \n以下程式 \nint a[9]={5,2,9,4,5,6,3,4,1};  \ng(a, 0, 9); \n輸出為何 ？",
    "options": [
      "9 5 6",
      "9 6 4 1",
      "9 5 6 1",
      "9 6 3 4 1",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "函數參數le與ri是範圍(左閉右開區間)，找最大值印出， 然後遞迴右邊的區間。對此輸入，先找到 9，然後9的右邊最大是6，然後是4，最後是1",
    "difficulty": "中"
  },
  {
    "id": 76,
    "question": "int a[11]={3,4,1,5,2,4,2,6,9 ,7,8}; \nint s[11],t=-1,i; \nfor (i=0; i<11; i++) { \n    while (t>=0 && s[t]>=a[i])  \n        t--; \n    s[++t] = a[i]; \n} \nwhile (t >= 0)  \n    printf(\"%d  \", s[t--]); \n輸出為何 ？",
    "options": [
      "8 7 6 5 4 3",
      "8 7 6 4 2 1",
      "8 7 6 2 1",
      "8 7 6 2 2 1",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "s是一個stack，t是top的index，s中維護遞增子序列 (無等號)。輸出時反序輸出",
    "difficulty": "中"
  },
  {
    "id": 77,
    "question": "int a[9] =   ?  ; \nint t = 0; \nfor (int i=0; i<9; i++) { \n    if (a[i]>t || a[i]<-t) \n        t = a[i]; \n} \nprintf(\"%d\",  t); \n則程式中?的部分為 以下選項與 其輸出的敘述何者錯誤？",
    "options": [
      "?為{1,2,3,4,5,6,9,8,7 }時輸出9",
      "?為{3,2,-4,-5,1,2,3,0,-5}時輸出-5",
      "?為{5,-2,3,-6,0,-4,1,2,-3}時輸出-4",
      "?為{1,0,0,-4,2,1,-7,2,0}時輸出2",
      "以上皆無誤"
    ],
    "correctAnswer": 2,
    "explanation": "絕對值大 的會變成t，但如果t是負值，下一個任何值都會取代它，也等同於：找絕對值最大的，如果是正數，就是它，否則遞迴右邊。(C)的輸出是-3",
    "difficulty": "難"
  },
  {
    "id": 78,
    "question": "int a[7] = {3,1,6,4,9,5,7 }, n=7, s=0; \nfor (int i=0; i<n; i++) { \n    s += (a[i] > a[i+1])? a[i] : a[i+1]; \n} \nprintf(\"%d\",  s); \n輸出為何 ？",
    "options": [
      "35",
      "40",
      "50",
      "47",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "將相鄰兩個降大的加起來 ，但i範圍寫錯，會 out of range。應該寫i<n-1",
    "difficulty": "中"
  },
  {
    "id": 79,
    "question": "int a[8]={1,2,4,4,5,7,7,8 }; \nint f(int v) { \n    int i = 0; \n    while (a[i] < v) \n        i++; \n    return i; \n} \n以下選項中 ，v與回傳值的敘述何者錯誤 ？",
    "options": [
      "f(0)回傳0",
      "f(6) 回傳5",
      "f(4) 回傳2",
      "f(9)回傳8",
      "以上皆無錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "while迴圈i的上限忘記寫，v=9時會陣列超界，  程式錯誤",
    "difficulty": "中"
  },
  {
    "id": 80,
    "question": "int s[9] =   ?   ; \nint f(int le, int ri) { \n    for (int i=le+1; i<ri; i++) { \n        if (abs(s[i])  > abs(s[le]) ) \n            le = i; \n    } \n    if (s[le] >= 0 || le+1==ri)   \nreturn s[le]; \n    return f(le+1,ri);  \n} \n考慮f(0,9)呼叫此函數， 以下選項中 s的初值與對應的回傳值 何者錯誤 ？",
    "options": [
      "?為{1,2,3,4,5,6,9,8,7 }時回傳9",
      "?為{3,2,-4,-5,1,2,3,0, -5}時回傳-5",
      "?為{5,-2,3,-6,0,-4,1,2,-3}時回傳-4",
      "?為{1,0,0,-4,2,1,-7,2,0}時回傳2",
      "以上皆無誤"
    ],
    "correctAnswer": 2,
    "explanation": "區間[le,ri)，找絕對值最大的，如果是正數或者右邊已經沒有，答案就是它，否 則遞迴右邊。(C)的輸出是-3",
    "difficulty": "難"
  },
  {
    "id": 81,
    "question": "int a; \nint main() { \n    int b, c[5]={-1}; \n    printf(\"%d  %d %d\", a, b, c[2]); \n    return 0; \n} \n對於輸出a,b,c[2] 的值，下列 敘述何者正確 ？",
    "options": [
      "a=0，b=0，c[2]= -1",
      "a與b的值不一定， c[2]= -1",
      "a與b的值不一定， c[2]= 0",
      "a=0，b的值不一定， c[2]= 0",
      "a，b，c[2]的值皆不一定"
    ],
    "correctAnswer": 3,
    "explanation": "全域變數a會初始為0，區域變數b沒有初值則值不一定，陣列 c只有c[0]=-1，其他值會給 -1",
    "difficulty": "難"
  },
  {
    "id": 82,
    "question": "int chk(char *s) { \n    int i=0, j, cost=0; \n    for (j=0; s[j]; j++); \n    j--; \n    while (i < j) { \n        if (s[i] != s[j]) { \n            cost += (s[i]<s[j])? s[i]: s[j]; \n            cost -= '0'; \n        } \n        i++; j--; \n    } \n    return cost; \n} \n以chk(\"93010307435\")呼叫的回傳值 為何？",
    "options": [
      "6",
      "8",
      "9",
      "12",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "此函數找左右對稱位置不相等字元，也就是 第i個與倒數第 i個不同時加上較小的 數值。答案是 5+0+1 = 6",
    "difficulty": "中"
  },
  {
    "id": 83,
    "question": "int idx[4] = {3,0,5,1}, \n    p[5] = {5,4,3,2,1 }, total = 0; \nfor (int i=0; i<4; i++) { \n    if (p[idx[i]]<5  && idx[i]<5) \n        total += p[idx[i]]; \n} \nprintf(\"%d\",  total); \n輸出為何 ？",
    "options": [
      "11",
      "6",
      "15",
      "4",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "想要將idx所指位置的值小於 5的相加，答案與說明：預期是 4+2=6，但if 的short-circuit 保護寫反了，會產生index out of range的錯誤",
    "difficulty": "難"
  },
  {
    "id": 84,
    "question": "int a[5]={3,1,2,0,5 },p=12,cnt=0; \nfor (int i=0; i<5; i++) { \n    if ((p%a[i]==0) && (a[i]!=0)) { \n        cnt++; \n    } \n} \nprintf(\"%d\",  cnt); \n輸出為何 ？",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "想要計算p的倍數有幾個，預期有三個，但 if 的兩條件寫反了，沒有short-circuit 保護，產生 除以0取餘數的 程式錯誤",
    "difficulty": "中"
  },
  {
    "id": 85,
    "question": "int a[8]={0,1,4,2,0, -3,2,0},p=3; \nwhile (1) { \n    if (a[p]==0 || p<0 || p>=8) \n        break; \n    p += a[p];  \n} \nprintf(\"%d\",  p); \n輸出為何 ？",
    "options": [
      "0",
      "4",
      "7",
      "8",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 4,
    "explanation": "每次前進a[p]距離 ， 負值為倒退 ，直到碰到0或者出界， if的條件寫反了，沒有short-circuit 保護，會對a[8]取值，超界，  程式錯誤",
    "difficulty": "中"
  },
  {
    "id": 86,
    "question": "int a[11]={0,-1,4,2,0, -3,-2,5,1,-8,-3}; \nint f(int i) { \n    while (0<=i && i<11) { \n        if (a[i]==0) return i; \n        i += a[i]; \n    } \n    return -1; \n} \n則f(1),f(3), f(8),f(10) 回傳值依序 為何？",
    "options": [
      "0,4,-1,-1",
      "0,4,0,-1",
      "1,-1,4,-1",
      "0,-1,0,-1",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "每次前進a[i]距離，負值為倒退，直到碰到0或者出界，出界回傳 -1，否則回傳停下來的位置 每一格走過了之後，下次再走到不必重複走，可以很快的用紙筆模擬答案與說明",
    "difficulty": "中"
  },
  {
    "id": 87,
    "question": "int a[8]={0,1,2,3,4,5,6,7},p[8] ,j=0; \nfor (int i=0; i<8; i+=2)  \n    p[j++] = a[i]; \nfor (int i=7; i>=0; i-=2)  \n    p[j++] = a[i]; \n執行後p的內容為何？[]用來表示陣列。",
    "options": [
      "[0,2,4,6,7,5,3,1 ]",
      "[0,1,2,3,4,5,6,7 ]",
      "[0,2,4,6,1,3,5,7]",
      "[0,1,2,3, 7,6,5,4]",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "j每次加一 ，是一一填入p中",
    "difficulty": "易"
  },
  {
    "id": 88,
    "question": "int a[3][2]={{0,1},{2,3},{4,5}},*p=a; \n*(p+4) = 9; \n*(p+2) = 7; \nfor (int i=0; i<3; i++) \nprintf(\"%d  %d \", a[i][0],a[i][1] ); \n輸出為何 ？",
    "options": [
      "0 1 2 3 4 5",
      "0 1 2 9 7 5",
      "0 1 7 3 9 5",
      "0 1 2 3 7 9",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "二維陣列以 row major方式儲存，所以第4個位置是a[2][0]也就是原來存4的位置，而第 2個位置就是存 2的位置",
    "difficulty": "中"
  },
  {
    "id": 89,
    "question": "void f(char *p, char *q) { \n    for ( ; *q; p++,q++)  *p = *q; \n    *p = '\\0'; \n} \n若函數f定義如上，則以下程式的輸出為何？  \nchar a[3][6]={\"wa\",\"tle\",\"ac\"}; \nfor (int i=0; i<3; i++) \nf(a[i]+2,  \"Omg\"); \nprintf(\"%s  %s %s\",a[0],a[1],a[2]);",
    "options": [
      "waOmg tlOmg acOmg",
      "Omg Omg Omg",
      "waOmg tleOmg acOmg",
      "Omgwa Omgtl Omgac",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "f是類似strcpy字串複製，程式中在每個字串 +2的位置複製Omg",
    "difficulty": "中"
  },
  {
    "id": 90,
    "question": "int f(char *s) { \n    int r = 0; \n    for ( ; *s; s++) { \n        if (*s < '0' || *s>'9') continue;  \n        r = r*10+(*s -'0'); \n    } \nreturn r; \n} \nf(\"3,100,254\")+f(\"3e5\") 的回傳為何？",
    "options": [
      "3400254",
      "289",
      "310025435",
      "3100289",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "函數f將傳入字串中的數字轉成整數，答案是 3100254+35",
    "difficulty": "中"
  },
  {
    "id": 91,
    "question": "char a[10]=\"127037265\" , n=9; \nfor (int i=0; i<n; i++)  \n    a[i] -= '0'; \nwhile (n > 1) { \n    int j=0; \n    for (int i=0; i<n; i+=2) { \n        int p=a[i]; \n        if (i+1 < n) p += a[i+1]; \n        if (p < 10) a[j++] = p; \n        else { \n            a[j++] = 1; a[j++] = p-10; \n        } \n    } \n    n = j; \n} \nprintf(\"%d\",  a[0]); \n輸出為何 ？",
    "options": [
      "4",
      "6",
      "7",
      "8",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "每2位切成一個數字，個位與十位相加寫下來，重複此步驟直到剩下一位。371085 -> 10113 -> 123 -> 33 -> 6",
    "difficulty": "難"
  },
  {
    "id": 92,
    "question": "int g(int a) { \n    int r=0; \n    while (a) { \n        r = r*10+a%10; \n        a /= 10; \n    } \n    return r; \n}  \nint f(int a) { \n    while (1) { \n        int b = g(a); \n        if (a == b) return a; \n        a += b; \n    } \n} \n若函數g與f定義如上，則 f(2371),  \nf(932), f(1221) 回傳值依序 為何？",
    "options": [
      "7117, 1441, 1221",
      "6226, 2822, 3553",
      "7117, 2882, 1221",
      "6226, 1441, 3553",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "函數g是將整數反轉 ，f則是reverse and add: 將整數反轉後與原數相加，直到成 為迴文數字。2371 → 4103 → 7117 ; 932 → 1171 → 2882 ; 1221",
    "difficulty": "難"
  },
  {
    "id": 93,
    "question": "char a[4][5]={\"1110\",\"1010\",\"0011\",\"1110\"}; \nchar w[7],j=0;  \nfor (int i=0; i<4; i++) \n    w[j++] = a[i][i];  \nw[j] = '\\0'; \nprintf(\"%s \", w); \n輸出為何 ？",
    "options": [
      "1110",
      "1010",
      "0101",
      "1101",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "對角線串接",
    "difficulty": "中"
  },
  {
    "id": 94,
    "question": "char a[3][5]={\"abcd\",\"pqrs\",\"1234\"}; \nchar s[20]; \nint k=0; \nfor (int i=0; i<4; i++) { \n    for (int j=0; j<3; j++) { \ns[k++] = a[j][i]; \n} \n} \ns[k] = '\\0'; \nprintf(\"% s\", s); \n輸出為何 ？",
    "options": [
      "abcdpqrs1234",
      "aaaapppp1111",
      "aq3br4cs1dp2",
      "ap1bq2cr3 ds4",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "依照column major串接字串",
    "difficulty": "中"
  },
  {
    "id": 95,
    "question": "char *f(char *s, char d, char *t){ \n    int i=0; \n    while (*s && *s!=d) { \n        *t = *s; \n        t++, s++; \n    } \n    *t = '\\0'; \n    return (*s)? s+1: NULL; \n} \n以下程式 \nchar a[20]=\"13/1,4/;/xy\",  w[9][9]; \nchar *p = a; \nint i=0 \nwhile (p) { \n    p = f(p,'/',w [i++]); \n} \nfor (i--; i>=0; i--) \n    printf(\"%s\",  w[i]); \n輸出為何？",
    "options": [
      "1314xy",
      "131,4;xy",
      "xy;1,413",
      "yx;4,131",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "將s字串以d為間隔切斷依序存在w中，再反順序印出 w中字串",
    "difficulty": "難"
  },
  {
    "id": 96,
    "question": "char a[4][11]={\"0110001101\", \n                  \"1011101101\",  \n                  \"1101110111\",  \n                  \"1100100010\"}; \nint f(int i,int j) { \n    if (a[i][j] == '0') return 0; \n    a[i][j] = '0'; \n    int cnt = 1; \n    int dr[4]={0,1,0, -1}, dc[4]={1,0, -1,0}; \n    for (int d=0; d<4; d++) { \n        int r=i+dr[d],  c=j+dc[d];  \n        if (r<0 || r>3 || c<0 ||c >9) continue;  \n        cnt += f(r,c); \n    } \n    return cnt; \n} \n則依序呼叫 f(1,3),f(0,3),f(2,9) ,f(0,2) 的回傳值分別為何？",
    "options": [
      "9 1 9 9",
      "10 0 5 0",
      "9 0 10 9",
      "9 0 10 0",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "很標準的DFS寫法，以上下左右為聯通，計算連通區塊的大小， DFS。留意走過的會改成0，所以在f(1,3)之後再呼叫 f(0,2)會變成0",
    "difficulty": "難"
  },
  {
    "id": 97,
    "question": "int a[9]={3,4,2,7,0,8,1,3,2};  \nvoid f(int le, int ri) { \n    if (le >= ri) return; \n    int p = le; \n    for (int i=le+1; i<ri; i++) { \n        if (a[i] < a[p]) p = i; \n    } \n    printf(\"%d  \", a[p]); \n    f(le, p); \n    f(p+1, ri); \n} \n以f(0,9)呼叫的輸出為何 ？",
    "options": [
      "0 1 2 2 3 3 4 7 8",
      "0 2 3 4 7 1 8 2 3",
      "0 2 3 4 7 1 2 3 8",
      "0 2 3 4 7 1 8 3 2",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "分治的標準型，找最小值放在前面，分左右遞迴 f([3,4,2,7,0,8,1,3,2 ]) = [0]+f([3,4,2,7])+f(8,1,3,2 ]) = [0]+[2]+f([3,4])+f([7])+ [1]+f([8])+f([3,2]) = [0,2,3,4,7,1,8,2,3]",
    "difficulty": "難"
  },
  {
    "id": 98,
    "question": "int a[8]={0,3,6,9,12,15,18,20 }; \nint b(int x): \n    int le=0, ri=7; \n    while (le < ri) { \n        int mid = (le+ri)/2 ; \n        if (x == a[mid]) return mid; \n        if (x < a[mid]) \n            ri = mid-1; \n        else \n            le = mid; \n    } \n    return le; \n} \n以下呼叫與結果何者錯誤 ？",
    "options": [
      "b(-1)回傳0",
      "b(5) 回傳2",
      "b(18) 回傳6",
      "b(30) 程式不會正常結束",
      "以上選項皆無錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "寫壞的二分搜，只有在 a中或<0會正確回傳第一個 ≥x的位置，其他會導致無窮迴圈 當le+1=ri 時，mid = le，會執行le = mid，因此le,ri並無改變",
    "difficulty": "難"
  },
  {
    "id": 99,
    "question": "float low=1.0, up=2.0, x=2.0; \nfloat eps = 0.0001; \nint cnt = 0; \nwhile (up - low > eps) { \n    cnt++; \n    float mid = (low+up)/2 ; \n    if (mid*mid  > x) \n        up = mid; \n    else low = mid; \n} \nprintf(\" %f, %d\", low,cnt); \n此程式計算根號 2的近似值，其中 cnt的值是迴圈的次次，也表示程式的效率。 cnt最後輸出的值在下列何範圍 ？",
    "options": [
      "0 ~ 50",
      "51 ~ 100",
      "101 ~ 500",
      "501 ~ 1000",
      "1000 以上"
    ],
    "correctAnswer": 0,
    "explanation": "二分搜，區間不超過 10000，次數大約14次2^14>10000",
    "difficulty": "中"
  },
  {
    "id": 100,
    "question": "int a=0,i,j; \nfor (i=0; i<n; i++) { \n    for (j=0; j<m; j++)  \n        a += i+j; \n} \n此程式片段的時間複雜度以 m,n表示為下列何者？",
    "options": [
      "O(m+n)",
      "O(mn)",
      "O(m/n)",
      "O(m2+n2)",
      "以上皆非"
    ],
    "correctAnswer": 1,
    "explanation": "雙迴圈執行次數",
    "difficulty": "易"
  },
  {
    "id": 101,
    "question": "int len(char  s[]) { \n    int i=0; \n    while (s[i]!=' \\0') i++; \n    return i; \n} \nchar a[N],b[N];  // 假設N已經定義且足夠大  \nscanf(\"%s\",  a); \nfor (int i=0; i<len(a);  i++) { \n    b[i] = a[i]; \n} \n若輸入字串 a的長度是n，此程式片段 的時間複雜度以n表示為下列何者？",
    "options": [
      "O(n)",
      "O(nlog(n))",
      "O(n2)",
      "O(n3)",
      "以上皆非"
    ],
    "correctAnswer": 2,
    "explanation": "在沒有編譯器優化的狀況下，每次回圈都會呼叫一次 len，所以每次O(n)總和O(n*n)= O(n2)",
    "difficulty": "中"
  },
  {
    "id": 102,
    "question": "int f(int a[], int i, int v) { \n    if (i < 0) return abs(v-100); \n    int x = f(a,i-1,v+a[i]);  \n    int y = f(a,i-1,v); \n    return (x<y)? x: y; \n} \n以f(a,n-1,0)呼叫此函數， 其中n是陣列a的長度，則worst case時間複雜度 以n表示為下列何者？",
    "options": [
      "O(n)",
      "O(n2)",
      "O(n!)",
      "O(2n)",
      "以上皆非"
    ],
    "correctAnswer": 3,
    "explanation": "暴搜子集合 ，找所有子集合的和與100的最小差距",
    "difficulty": "中"
  },
  {
    "id": 103,
    "question": "int f(int k) { \n    for (int i=0; i<k; i++) { \n        if (i*i > k) \n            return i; \n    } \n} \nint p = 0; \nfor (int i=0; i<n; i++) { \n    p += f(i); \n} \n此程式的worst case時間複雜度以 n表示為下列何者？",
    "options": [
      "O(n3/2)",
      "O(nlog(n))",
      "O(n1/2)",
      "O(n2)",
      "以上皆非"
    ],
    "correctAnswer": 0,
    "explanation": "f(k)的時間是 根號k，(根號1+根號2+…根號n) = O(n^1.5)",
    "difficulty": "難"
  },
  {
    "id": 104,
    "question": "int f(int p, int q) { \n    if (q < p+5) return (p+q)/2; \n    int s = 0; \n    for (int i=p; i<q; i++) { \n        s += i; \n    } \n    int m = (p+q)/2; \n    return f(p,m)+f(m,q)+s ; \n} \n以f(0,n)呼叫此函數，則 worst case時間複雜度為下列何者？",
    "options": [
      "O(2n)",
      "O(nlog(n))",
      "O(n)",
      "O(n2)",
      "以上皆非"
    ],
    "correctAnswer": 1,
    "explanation": "每次處理的區間 [p,q)，區間長度n=q-p，則此為分治，時間複雜度 T(n)=2T(n/2)+O(n) ，T(n)=O(nlog(n))。注意時間複雜度不是返回的數值",
    "difficulty": "難"
  },
  {
    "id": 105,
    "question": "int s = 0; \nfor (int i=1; i<n; i++) { \n    for (int j=i; j<n; j+=i) { \n        s++; \n    } \n} \nprintf(\"%d\",  s); \n此程式片段的時間複雜度以 n表示，則下列何者為最準確的表示式？",
    "options": [
      "O(n)",
      "O(nlog(n))",
      "O(n2)",
      "O(n3)",
      "以上皆非"
    ],
    "correctAnswer": 1,
    "explanation": "n(1+1/2+1/3+1/4…)  = O(nlog(n))",
    "difficulty": "難"
  },
  {
    "id": 106,
    "question": "int f(int a[], int p, int q) { \n    int t=0; \n    for (int i=p; i<q; i++) \n        t += a[i]; \n    return t; \n} \ns = 0; \nfor (i=0; i<n; i++) { \n    for (j=i+1; j<n; j++) { \n        s += f(a,i,j); \n    } \n} \na是一個整數 陣列，此程式片段的時間複雜度以 a的長度n表示，則下列何者為最準確的表示式？",
    "options": [
      "O(n)",
      "O(nlog(n))",
      "O(n2)",
      "O(n3)",
      "以上皆非"
    ],
    "correctAnswer": 3,
    "explanation": "f(a,p,q) 的時間是O(q-p)，也就是區間長度，因為長度 i的區間有n-i個，所以總時間是i*(n-i)= O(n3)。(省略次要項次)",
    "difficulty": "難"
  },
  {
    "id": 107,
    "question": "int f(int a[], int n, int x) { \n    int p = n/2, q = 0; \n    while (p > 0) { \n        if (q+p<n && a[q+p] < x) \n            q += p; \n        p /= 2; \n    } \n    return q; \n} \n此函數被呼叫時，傳入的 a是一個長度n的整數陣列，而x是一個整數。此函數的時間複雜度以 a的長度n來表示的話，則下列何者為其 worst case時間複雜度？",
    "options": [
      "O(1)",
      "O(log(n))",
      "O(n)",
      "O(nlog(n))",
      "以上皆非"
    ],
    "correctAnswer": 1,
    "explanation": "p每次減半， log(n)次之後變成0，迴圈內為 O(1)，故複雜度為O(logn)。此程式未必是執行二分搜，但只要看時間複雜度， while內是O(1)，p每次折半",
    "difficulty": "中"
  },
  {
    "id": 108,
    "question": "int f(char *a, char *b, int m, int n) { \n    for (int i=0; i<(  q1   ); i++) { \n        if (a[i] < b[i]) return 1; \n        if (a[i] > b[i]) return 0; \n    } \n    return   q2   ;  \n} \n函數f定義為：m與n分別是字串 a與b的長度，當a字串的「 字典序」小於b字串時回傳 1(或非0整數)，請問程式中的 q1與q2為下列何者時可以符合定義？",
    "options": [
      "q1: (m<n)?m:n , q2: (a[i]<b[i])",
      "q1: (m<n)?m:n , q2: (m<n)",
      "q1: (m<n)?n:m , q2: (a[i]<b[i])",
      "q1: (m<n)?n:m , q2: 0",
      "以上皆非"
    ],
    "correctAnswer": 1,
    "explanation": "迴圈比較到 min(m,n) ，若未分大小，a比較短的時候回傳 1",
    "difficulty": "中"
  },
  {
    "id": 109,
    "question": "// ensure len(a)==len(b)  \nint small(char *a, char *b, int n) {  \n    int i = 0; \n    while (i<n && a[i]==b[i] ) \n        i++; \n    return (   ?    );  \n} \n此函數定義為：  a字串的「字典序」小於b字串時回傳1(或非0整數)，輸入保證傳入的 a與b長度相等。請問程式中的 ?處應填入下列何者？",
    "options": [
      "a[i]<b[i]  && i<n",
      "i>=n || a[i]<b[i]",
      "i<n || a[i]<b[i]",
      "i<n && a[i]<b[i]",
      "以上皆非"
    ],
    "correctAnswer": 3,
    "explanation": "迴圈找到第一個不相同位置，但不能超範圍。迴圈結束後，若 i==n則a==b(不符合True的定義)，否則，a[i]與b[i]不同，a[i]小則回傳True。注意(A)的寫法可能導致 陣列超界錯誤",
    "difficulty": "中"
  },
  {
    "id": 110,
    "question": "int f(int a, int b, int mod) {  \n    int result = 1; \n    while (b) { \n        if (   q1     ) { \n            result = (result*a)%mod ; \n        } \n            q2    ; \n        a = (a*a)%mod ; \n    } \n    return result; \n} \n此函數利用 b的二進位表示法 來快速計算 a的b次方除以mod的餘數，其中 a,b,mod 皆正整數且mod不為0。請問程式中的 q1與q2處應填入下列何者？",
    "options": [
      "q1: b%2==1, q2: b //= 10",
      "q1: b&result,  q2: b >>= 1",
      "q1: b&1, q2: b >>= 1",
      "q1: b^1, q2: b //= 2",
      "以上皆非"
    ],
    "correctAnswer": 2,
    "explanation": "b為奇數時將 a乘進去。每一回合b右移一位",
    "difficulty": "中"
  },
  {
    "id": 111,
    "question": "int f(int a, int b, int mod) {  \n    if (b == 0) return 1; \n    if (b&1) return f(a,b-1,mod)*a%mod;  \n       ?     \n} \n此函數利用 b的二進位表示法 在O(log(b)) 的時間複雜度計算「a的b次方除以mod的餘數」， 其中a>0, b≥0, mod>0皆為整數 。請問程式中的 ?處應填入下列何者？",
    "options": [
      "return f(a,b-1,mod)*a%mod;",
      "return f(a,b/2,mod)*f(a,b/2,mod)%mod;",
      "int p=f(a,b-1,mod); return p*a%mod;",
      "int p=f(a,b/2,mod);  return p*p%mod;",
      "以上皆非"
    ],
    "correctAnswer": 3,
    "explanation": "b是偶數時，先算出 b/2次方，再自乘 。要注意(B)的寫法會呼叫兩次，時間複雜度是 O(b)",
    "difficulty": "易"
  },
  {
    "id": 112,
    "question": "int s[10]=    ?      ;  \nint q[10], idx=-1, i; \nfor (i=0; i<n; i++) { \n    if (s[i] < 0) q[++idx] = s[i]; \n    else if (idx<0 || q[idx] != -s[i]) { \n        idx = 99; break; \n    } else idx--; \n} \nprintf(\"%d\",  (idx<0)?  1: 0); \n程式中?為下列何者時輸出 1？",
    "options": [
      "{-1,1,-2,-3,2,3}, n=6",
      "{-1,-3,-2,2,3,-1,1}, n=7",
      "{-1,-2,2,-3,-1,1,3,1}, n=8",
      "{-1,-1,1,-2,3,-3,2,1}, n=8",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "類似用stack檢查括號平衡，負數是左括號，正數是右括號，絕對值相同是一對",
    "difficulty": "難"
  },
  {
    "id": 113,
    "question": "int a[10]={4,-5,2,0,4,2,-2,1,3,-1}; \nint q = -999; \nfor (int i=1; i<10; i++) { \n    if (a[i-1] > 0)  \n        a[i] += a[i-1]; \n    if (a[i] > q) q = a[i]; \n} \nprintf(\"%d  %d\", a[7],q); \n輸出為何 ？",
    "options": [
      "5 10",
      "7 12",
      "7 10",
      "5 12",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "若前一項大於 0就加過來，否則不變。很容易用紙筆得到 a=[4,-1,2,2,6,8,6,7,10,9] 其實是找 max subarray 的演算法，但做答並不一定需要知道",
    "difficulty": "中"
  },
  {
    "id": 114,
    "question": "若p<q且兩者皆為在 int範圍內的正整數，現要計算兩者的中點，考慮下面兩個寫法：  \nint m = (p + q)/2; \nint c = p + (q-p)/2; \n下列敘述何者正確 ？",
    "options": [
      "m與c必定相同",
      "若q-p是偶數，則 m與c必定相同",
      "若q-p是奇數，則m與c必不相等",
      "當p+q會產生溢位時， (1)會得到錯誤的結果 (負值)",
      "以上皆非"
    ],
    "correctAnswer": 3,
    "explanation": "這個一個二分搜著名的 bug",
    "difficulty": "難"
  },
  {
    "id": 115,
    "question": "int a=40, b;  \nlong long c,d; \nlong long int e; \n若已有以上宣告， 考慮以下指令 ： \nb = 1 << a; \nc = (long long)(1 << a); \nd = 1ull << a; \ne = (long long)1 << a; \n有哪幾個可以正確得到 2的40次方？",
    "options": [
      "b,c,d,e 都可以",
      "只有c,e可以，b,d不可以",
      "只有d,e可以，b,c不可以",
      "只有e可以，b,c,d不可以",
      "以上皆非"
    ],
    "correctAnswer": 2,
    "explanation": "b與c都會發生overflow",
    "difficulty": "易"
  },
  {
    "id": 116,
    "question": "int a[6] = {1,1,1,1,1, 1}; \nint f(int i, int s) { \n    if (i == 6) {  \n        return (s==3)? 1: 0; \n    } \n    int w1 = f(i+1,s) ; \n    int w2 = f(i+1,s+a[i]) ; \n    return w1+w2; \n} \nprintf(\"%d\",  f(0,0)); \n輸出為何 ？",
    "options": [
      "4",
      "16",
      "20",
      "64",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "此遞迴程式枚舉所有子集合，檢查其和是否為 3。所以答案是C(6,3)=20",
    "difficulty": "難"
  },
  {
    "id": 117,
    "question": "int f(int n, int i) { \n    if (i==0 || i==n) \n        return 1; \n    return f(n-1,i)+f(n -1,i-1); \n} \nf(5,2)的回傳值 為何？",
    "options": [
      "6",
      "10",
      "15",
      "20",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "遞迴。手算可以建表，其實這是組合數的公式 C(n,r)=C(n -1,r-1)+C(n-1,r-1)",
    "difficulty": "中"
  },
  {
    "id": 118,
    "question": "int d[6][6]={0},i,j;  \nfor (i=0; i<6; i++) { \n    d[i][0] = 1; d[i][i] = 1; \n    for (j=1; j<i; j++) { \n        d[i][j] = d[i-1][j-1]+d[i-1][j]; \n    } \n} \nd[4][2]+d[5][3] 的值為何？",
    "options": [
      "13",
      "14",
      "15",
      "16",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "二維陣列建表。C(4,2)+C(5,3)=16 其實這是組合數的公式，但並不需要知道也可以做。C(n,r)=C(n -1,r-1)+C(n-1,r-1)",
    "difficulty": "中"
  },
  {
    "id": 119,
    "question": "#define n 100 \nint d[n+1][n+1] = {0}, mod=1000000007 ; \nint f(int k, int i) { \n    if (d[k][i] > 0) return d[k][i]; \n    if (i==0 || i==k) \n        d[k][i] = 1; \n    else \n        d[k][i]= (f(k-1,i)+f(k -1,i-1))%mod; \n    return d[k][i]; \n} \nprintf(\"%d\",  f(n,n/2)) \n下列何者最準確的以 n來表達此程式的時間複雜度？",
    "options": [
      "O(n2)",
      "O(n3)",
      "O(2n)",
      "O(n!)",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "這是以top-down DP來計算組合數，答題不一定要知道，注意到d的存在，所有可能的呼叫參數都在表格內，每一個格子只會遞迴計算一次，格子數是 O(n2)，所以複雜度就是平方。如果沒有memoization ，時間複雜度是O(C(n,n/2))=O(2^n)",
    "difficulty": "難"
  },
  {
    "id": 120,
    "question": "int cmp(const  void *x, const void *y) { \n    return (*(int*)x)  - (*(int*)y);  \n} \nint d[6],i, s=0; \nfor (i=0; i<6; i++)  \n    d[i] = (i-2)*(i-2); \nqsort(d, 6, sizeof(int),  cmp); \n若函數cmp宣告如上，執行後 d的內容為何？",
    "options": [
      "[4,1,0,1,4,9]",
      "[-4,-2,0,2,4,6]",
      "[0,1,1,4,4, 9]",
      "[0,1,1,4,4,9,16]",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "用0..5生成 [4,1,0,1, 4,9]，然後小排到大",
    "difficulty": "易"
  },
  {
    "id": 121,
    "question": "int cmp(const  void *x, const void *y) { \n    return (*(int*)x)  - (*(int*)y);  \n} \nint d[10]={3,-1,0,5,0,9,1,0,7,4 },cnt=0;  \nqsort(d,  5, sizeof(int),  cmp); \nqsort(d+5, 5, sizeof(int),  cmp); \nfor (int i=0; i<10;i++ ) \n    for (int j=i+1; j<10; j++)  \n        if (d[i] > d[j]) cnt++; \nprintf(\"%d\",  cnt); \n輸出為何 ？",
    "options": [
      "15",
      "10",
      "7",
      "5",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "d切成2段，個別排序，左邊[-1,0,0,3, 5]， 右邊[0,1,4,7,9] 後面算inversion ，就是有幾對 (前大後小)，已排序的 內部不需要算，所以只要算p[i]在左邊 ，p[j]在右邊的有多少反序就好了。(3,0)(5,0)(3,1)(5,1)(5,4)",
    "difficulty": "難"
  },
  {
    "id": 122,
    "question": "int cmp(const  void *x, const void *y) { \n    return (   ?   ); \n} \nchar d[10]=\"ababcddba\";  \nqsort(d,  9, sizeof(char) , cmp); \n若要將d中字母大到小排序，?處應填下列何者 ？",
    "options": [
      "(*(char*)x) <= (*(char*)y)",
      "(*(char*)x) >= (*(char*)y)",
      "(*y) - (*x)",
      "(*(char*)y) - (*(char*)x)",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "型態轉換後相減， x在y之前應回傳負值 。注意(B)是錯的",
    "difficulty": "易"
  },
  {
    "id": 123,
    "question": "int cmp(const  void *x, const void *y) { \n    char *p=x, *q=y; \n    while (*p == *q && *p) p++,q++; \n    return (*p - *q); \n} \nchar d[5][6]={\"abcde\",  \"abc\", \"baaa\", \n\"aba\", \"baa\"}; \nqsort(d,  5, sizeof(char)*6,  cmp); \nprintf(\"%s  %s %s\", d[0],d[2],d[4] ); \n輸出為何 ？",
    "options": [
      "aba abc baaa",
      "abc abcde baa",
      "aba abcde baaa",
      "aba abcde baa",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "字串陣列的排序，依照字典序",
    "difficulty": "中"
  },
  {
    "id": 124,
    "question": "q = ?  \nint what = 1, cnt = 1, n=11; \nfor (int i=1; i<n; i++) { \n    if (q[i] == q[i-1]) { \n        cnt++; \n        if (cnt > what) what = cnt; \n    } else { \n        cnt = 1; \n    } \n} \nprintf(\"%d\",  what); \n若q為字串\"apaltpptpa y\"的字母由小排到大後的字串， 輸出為何 ？",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "排序後相同的東西會在一起。 q是s每個字母的 list，後面那段在算連續出現的字母個數， what是最大值，所以，就是出現最多的字母，p有4個",
    "difficulty": "難"
  },
  {
    "id": 125,
    "question": "char s[11]=\"qwaearqtba\",  n=10,i,j;  \nfor (i=2; i<n-1; i+=2) { \n    char t1=d[i],t2=d[i+1];  \n    for (j=i-2; j>=0; j-=2) { \n        if (d[j]>t1  || (d[j]==t1  && d[j+1]>t2))  \n            d[j+2]=d[j],  d[j+3]=d[j+1];  \n        else break; \n    } \n    d[j+2]=t1,  d[j+3]=t2;   \n} \nprintf(\"% s\", d); \n輸出為何 ？",
    "options": [
      "aaabeqqrtw",
      "aearbaqtqw",
      "aearabqqtw",
      "qwaearqtba",
      "以上皆非 或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "以2個字母為一個字串的insertion  sort。qwaearqtba -> aeqwarqtba -> aearqwqtba -> aearqtqwba -> aearbaqtqw",
    "difficulty": "中"
  }
];
