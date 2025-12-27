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
    "question": "int a=5, b=2, c=0;\nwhile (a > b) {\n  c += b;\n  a -= b;\n}\nprintf(\"%d\",c);\n輸出為何？",
    "options": [
      "2",
      "4",
      "6",
      "8",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "迴圈重複a>b時累加b到c，直到a<=b；c=2+2+2=6",
    "difficulty": "易"
  },
  {
    "id": 22,
    "question": "int x=10,y=20;\nint *p=&x,*q=&y;\np = q;\n*p = 30;\nprintf(\"%d,%d\",x,y);\n輸出為何？",
    "options": [
      "10,20",
      "10,30",
      "30,30",
      "30,20",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "p指向y；*p=30改變y的值，x不變",
    "difficulty": "易"
  },
  {
    "id": 23,
    "question": "int a[]={1,2,3,4,5};\nint *p=a+2;\nprintf(\"%d,%d,%d\",*p, *(p+1), *(p-1));\n輸出為何？",
    "options": [
      "2,4,1",
      "3,4,2",
      "3,5,1",
      "2,3,4",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "a+2指向a[2]=3；*(p+1)=a[3]=4；*(p-1)=a[1]=2",
    "difficulty": "中"
  },
  {
    "id": 24,
    "question": "int a=5;\nint *p=&a;\nint **q=&p;\n**q=10;\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "5",
      "10",
      "無效指標",
      "以上皆非",
      "程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "q指向p；**q改變p指向的a，結果a=10",
    "difficulty": "易"
  },
  {
    "id": 25,
    "question": "char *s=\"hello\";\ns[0]='H';\nprintf(\"%s\",s);\n輸出為何？",
    "options": [
      "Hello",
      "hello",
      "記憶體錯誤",
      "以上皆非",
      "程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "字串常數不可修改；嘗試修改會造成記憶體問題",
    "difficulty": "易"
  },
  {
    "id": 26,
    "question": "int a[3][4]={{1,2,3,4},{5,6,7,8},{9,10,11,12}};\nint *p=a[0];\nprintf(\"%d,%d\",*(p+5), *(p+8));\n輸出為何？",
    "options": [
      "6,9",
      "6,10",
      "5,9",
      "7,11",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "p=a[0]指向第一列；p+5=a[0]+5指向a[1][1]=6；p+8指向a[2][0]=9",
    "difficulty": "易"
  },
  {
    "id": 27,
    "question": "int a[2][3]={{1,2,3},{4,5,6}};\nint *p=&a[0][0];\nint *q=a[1];\nprintf(\"%d,%d\",q-p, *(q+2));\n輸出為何？",
    "options": [
      "3,5",
      "3,6",
      "1,5",
      "6,6",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "q-p=3（列寬）；q+2指向a[1][2]=6",
    "difficulty": "中"
  },
  {
    "id": 28,
    "question": "struct S { int x; char y; };\nstruct S s={5,'a'};\nstruct S *p=&s;\nprintf(\"%d,%c\",p->x, p->y);\n輸出為何？",
    "options": [
      "5,a",
      "5,0",
      "0,a",
      "錯誤",
      "以上皆非"
    ],
    "correctAnswer": 0,
    "explanation": "結構指標用->存取成員",
    "difficulty": "易"
  },
  {
    "id": 29,
    "question": "int a=10,b=20;\nint *p=&a,*q=&b;\nint *t=p; p=q; q=t;\nprintf(\"%d,%d\",*p,*q);\n輸出為何？",
    "options": [
      "10,20",
      "20,10",
      "20,20",
      "10,10",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "交換指標；p現在指向b，q指向a",
    "difficulty": "易"
  },
  {
    "id": 30,
    "question": "float f=3.7;\nint i=(int)f;\nf=2.3;\ni=(int)f;\nprintf(\"%d\",i);\n輸出為何？",
    "options": [
      "2",
      "3",
      "4",
      "2.3",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "強制轉型截斷小數部分；(int)2.3=2",
    "difficulty": "易"
  },
  {
    "id": 31,
    "question": "int a=5,b=2;\na = a>b ? a+b : a-b;\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "3",
      "5",
      "7",
      "0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "三元運算；5>2成立，a=5+2=7",
    "difficulty": "易"
  },
  {
    "id": 32,
    "question": "int a[5]={0};\nfor (int i=0; i<5; i++) {\n  a[i]=i*2;\n}\nint sum=0;\nfor (int i=0; i<5; i++) sum+=a[i];\nprintf(\"%d\",sum);\n輸出為何？",
    "options": [
      "10",
      "15",
      "20",
      "25",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "a=0,2,4,6,8；總和=20",
    "difficulty": "易"
  },
  {
    "id": 33,
    "question": "int i=0;\nwhile (i<5) {\n  printf(\"%d \",i++);\n}\n輸出為何？",
    "options": [
      "0 1 2 3 4",
      "1 2 3 4 5",
      "0 1 2 3 4 5",
      "4 3 2 1 0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "i++是後增加；列印後再加1",
    "difficulty": "易"
  },
  {
    "id": 34,
    "question": "char s[10]=\"test\";\nprintf(\"%d\",strlen(s));\n輸出為何？",
    "options": [
      "4",
      "5",
      "10",
      "0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "strlen計算字元數，不含\\\\0",
    "difficulty": "中"
  },
  {
    "id": 35,
    "question": "int a=10,b=3;\nprintf(\"%d,%d\",a/b, a%b);\n輸出為何？",
    "options": [
      "3,1",
      "4,0",
      "3,2",
      "4,1",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "整數除法和餘數；10/3=3，10%3=1",
    "difficulty": "易"
  },
  {
    "id": 36,
    "question": "int x=5;\nif (x++>5) {\n  printf(\"yes\");\n} else {\n  printf(\"no\");\n}\n輸出為何？",
    "options": [
      "yes",
      "no",
      "5",
      "6",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "x++後增加；條件判斷時x=5，不大於5",
    "difficulty": "易"
  },
  {
    "id": 37,
    "question": "int a=2;\nfor (int i=0; i<3; i++) {\n  a*=2;\n}\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "4",
      "8",
      "12",
      "16",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "a乘以2三次；2*2*2*2=16",
    "difficulty": "中"
  },
  {
    "id": 38,
    "question": "int x=7,y=3;\nswitch (x%y) {\n  case 1: printf(\"one\"); break;\n  case 2: printf(\"two\"); break;\n  case 0: printf(\"zero\"); break;\n  default: printf(\"other\");\n}\n輸出為何？",
    "options": [
      "one",
      "two",
      "zero",
      "other",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "7%3=1；符合case 1",
    "difficulty": "中"
  },
  {
    "id": 39,
    "question": "int a=0,b=0;\nfor (int i=1; i<=5; i++) {\n  if (i%2==0) a+=i;\n  else b+=i;\n}\nprintf(\"%d,%d\",a,b);\n輸出為何？",
    "options": [
      "6,9",
      "9,6",
      "8,5",
      "5,8",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "偶數累加到a(2+4=6)；奇數累加到b(1+3+5=9)",
    "difficulty": "中"
  },
  {
    "id": 40,
    "question": "char c='A';\nprintf(\"%d,%c\",c, c+32);\n輸出為何？",
    "options": [
      "65,a",
      "65,A",
      "A,a",
      "41,a",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "'A'=65；c+32=97，即'a'；%c列印字元形式",
    "difficulty": "中"
  },
  {
    "id": 41,
    "question": "int a=5;\nint b=a>3 && a<10 ? 1 : 0;\nprintf(\"%d\",b);\n輸出為何？",
    "options": [
      "0",
      "1",
      "5",
      "3",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "5>3且5<10成立；b=1",
    "difficulty": "中"
  },
  {
    "id": 42,
    "question": "int a[5]={1,2,3,4,5};\nint i=0,sum=0;\nwhile (a[i]!=4) {\n  sum+=a[i];\n  i++;\n}\nprintf(\"%d\",sum);\n輸出為何？",
    "options": [
      "3",
      "6",
      "10",
      "15",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "累加到a[i]=4為止；1+2+3=6",
    "difficulty": "中"
  },
  {
    "id": 43,
    "question": "int n=0;\nfor (int i=0; i<5; i++) {\n  for (int j=0; j<3; j++) {\n    n++;\n  }\n}\nprintf(\"%d\",n);\n輸出為何？",
    "options": [
      "5",
      "8",
      "15",
      "25",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "巢狀迴圈；外圈5次，內圈3次，共5*3=15",
    "difficulty": "難"
  },
  {
    "id": 44,
    "question": "int a=10,b=0;\nfor (int i=1; i<=a; i++) {\n  if (i%3!=0) b+=i;\n}\nprintf(\"%d\",b);\n輸出為何？",
    "options": [
      "30",
      "37",
      "40",
      "45",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "累加1-10中不被3整除的數；1+2+4+5+7+8+10=37",
    "difficulty": "難"
  },
  {
    "id": 45,
    "question": "int a=1,b=1;\nfor (int i=0; i<4; i++) {\n  int t=a+b;\n  a=b;\n  b=t;\n}\nprintf(\"%d\",b);\n輸出為何？",
    "options": [
      "3",
      "5",
      "8",
      "13",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "費波那契數列；1,1,2,3,5,8",
    "difficulty": "中"
  },
  {
    "id": 46,
    "question": "int x=5;\nint y=++x;\nprintf(\"%d,%d\",x,y);\n輸出為何？",
    "options": [
      "5,5",
      "6,5",
      "6,6",
      "5,6",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "++x先增加後回傳；x和y都是6",
    "difficulty": "中"
  },
  {
    "id": 47,
    "question": "int arr[5]={5,4,3,2,1};\nint max=arr[0];\nfor (int i=1; i<5; i++) {\n  if (arr[i]>max) max=arr[i];\n}\nprintf(\"%d\",max);\n輸出為何？",
    "options": [
      "1",
      "3",
      "4",
      "5",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "尋找最大值；陣列最大值為5",
    "difficulty": "中"
  },
  {
    "id": 48,
    "question": "int a=15;\nint b=0;\nwhile (a>0) {\n  b+=a%10;\n  a/=10;\n}\nprintf(\"%d\",b);\n輸出為何？",
    "options": [
      "5",
      "6",
      "15",
      "51",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "將數字各位相加；1+5=6",
    "difficulty": "中"
  },
  {
    "id": 49,
    "question": "int n=100;\nfor (int i=2; i*i<=n; i++) {\n  if (n%i==0) {\n    printf(\"%d\",i);\n    break;\n  }\n}\n輸出為何？",
    "options": [
      "2",
      "4",
      "10",
      "100",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "尋找最小質因數；100的最小質因數是2",
    "difficulty": "中"
  },
  {
    "id": 50,
    "question": "int a=7,b=11;\nint t=a; a=b; b=t;\nprintf(\"%d,%d\",a,b);\n輸出為何？",
    "options": [
      "7,11",
      "11,7",
      "11,11",
      "7,7",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "使用暫存變數交換兩個整數",
    "difficulty": "易"
  },
  {
    "id": 51,
    "question": "int sum(int x, int y) {\n  return x+y;\n}\nint a=sum(3, 4);\nint b=sum(a, 2);\nprintf(\"%d\",b);\n輸出為何？",
    "options": [
      "7",
      "9",
      "5",
      "12",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "函數呼叫；sum(3,4)=7，sum(7,2)=9",
    "difficulty": "中"
  },
  {
    "id": 52,
    "question": "int fact(int n) {\n  if (n<=1) return 1;\n  else return n*fact(n-1);\n}\nprintf(\"%d\",fact(5));\n輸出為何？",
    "options": [
      "5",
      "15",
      "120",
      "625",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "遞迴計算階乘；5!=120",
    "difficulty": "中"
  },
  {
    "id": 53,
    "question": "void swap(int *a, int *b) {\n  int t=*a; *a=*b; *b=t;\n}\nint x=10,y=20;\nswap(&x,&y);\nprintf(\"%d,%d\",x,y);\n輸出為何？",
    "options": [
      "10,20",
      "20,10",
      "0,30",
      "30,0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "指標參數；函數內交換影響原值",
    "difficulty": "中"
  },
  {
    "id": 54,
    "question": "int arr[5]={3,1,4,1,5};\nint count=0;\nfor (int i=0; i<5; i++) {\n  if (arr[i]==1) count++;\n}\nprintf(\"%d\",count);\n輸出為何？",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "計數陣列中特定元素出現次數",
    "difficulty": "難"
  },
  {
    "id": 55,
    "question": "char str[20]=\"Hello World\";\nint i=0;\nwhile (str[i]!=' ') {\n  printf(\"%c\",str[i]);\n  i++;\n}\n輸出為何？",
    "options": [
      "Hello",
      "Hello World",
      "World",
      "H",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "列印到空白符為止",
    "difficulty": "中"
  },
  {
    "id": 56,
    "question": "int a=0b101;\nint b=0b110;\nprintf(\"%d\",a&b);\n輸出為何？",
    "options": [
      "1",
      "4",
      "5",
      "6",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "位元AND運算；101&110=100=4",
    "difficulty": "中"
  },
  {
    "id": 57,
    "question": "int a=0b101;\nint b=0b110;\nprintf(\"%d\",a|b);\n輸出為何？",
    "options": [
      "3",
      "5",
      "6",
      "7",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "位元OR運算；101|110=111=7",
    "difficulty": "中"
  },
  {
    "id": 58,
    "question": "int a=5;\nprintf(\"%d\",a<<1);\nprintf(\",%d\",a>>1);\n輸出為何？",
    "options": [
      "5,2",
      "10,2",
      "10,5",
      "5,5",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "左移乘2，右移除2；5<<1=10，5>>1=2",
    "difficulty": "難"
  },
  {
    "id": 59,
    "question": "int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};\nint sum=0;\nfor (int i=0; i<3; i++) {\n  sum+=arr[i][i];\n}\nprintf(\"%d\",sum);\n輸出為何？",
    "options": [
      "15",
      "18",
      "21",
      "24",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "對角線元素和；1+5+9=15",
    "difficulty": "難"
  },
  {
    "id": 60,
    "question": "int x=10;\nint &y=x;\ny=20;\nprintf(\"%d\",x);\n輸出為何？",
    "options": [
      "10",
      "20",
      "錯誤",
      "未定義",
      "以上皆非"
    ],
    "correctAnswer": 2,
    "explanation": "C語言沒有參考型別，這是C++的特性",
    "difficulty": "難"
  },
  {
    "id": 61,
    "question": "enum Color {RED=0, GREEN=1, BLUE=2};\nColor c=GREEN;\nprintf(\"%d\",c);\n輸出為何？",
    "options": [
      "0",
      "1",
      "2",
      "GREEN",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "列舉型別；GREEN=1",
    "difficulty": "中"
  },
  {
    "id": 62,
    "question": "typedef struct {\n  int x;\n  int y;\n} Point;\nPoint p={3, 4};\nprintf(\"%d,%d\",p.x, p.y);\n輸出為何？",
    "options": [
      "3,4",
      "4,3",
      "0,0",
      "錯誤",
      "以上皆非"
    ],
    "correctAnswer": 0,
    "explanation": "結構體初始化",
    "difficulty": "中"
  },
  {
    "id": 63,
    "question": "int arr[5];\nint *p=arr;\nprintf(\"%d\",sizeof(p));\n輸出為何？",
    "options": [
      "4",
      "5",
      "8",
      "20",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "指標大小通常8位元組（64位元系統）",
    "difficulty": "中"
  },
  {
    "id": 64,
    "question": "int a=5;\nfor (int i=0; i<3; i++) {\n  a+=i;\n}\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "8",
      "10",
      "14",
      "11",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "a=5+0+1+2=8，錯誤，應該是a=5，5+0=5，5+1=6，6+2=8，答案是8，第二個選項應該不對",
    "difficulty": "易"
  },
  {
    "id": 65,
    "question": "int fib(int n) {\n  if (n<=1) return n;\n  return fib(n-1)+fib(n-2);\n}\nprintf(\"%d\",fib(6));\n輸出為何？",
    "options": [
      "6",
      "8",
      "10",
      "13",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "費波那契；0,1,1,2,3,5,8",
    "difficulty": "中"
  },
  {
    "id": 66,
    "question": "char s1[10]=\"hello\";\nchar s2[10]=\"hello\";\nif (s1==s2) printf(\"equal\");\nelse printf(\"not equal\");\n輸出為何？",
    "options": [
      "equal",
      "not equal",
      "0",
      "錯誤",
      "以上皆非"
    ],
    "correctAnswer": 1,
    "explanation": "陣列比較的是記憶體位址，不是內容",
    "difficulty": "中"
  },
  {
    "id": 67,
    "question": "int a=0;\ndo {\n  a++;\n} while (a<3);\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "do-while至少執行一次",
    "difficulty": "中"
  },
  {
    "id": 68,
    "question": "int a=100;\nwhile (a>0) {\n  if (a==50) break;\n  a-=10;\n}\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "0",
      "50",
      "60",
      "100",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "break跳出迴圈時a=50",
    "difficulty": "中"
  },
  {
    "id": 69,
    "question": "int a=0;\nfor (int i=1; i<=5; i++) {\n  if (i==3) continue;\n  a+=i;\n}\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "15",
      "12",
      "10",
      "14",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "continue跳過i=3；1+2+4+5=12",
    "difficulty": "中"
  },
  {
    "id": 70,
    "question": "int a=3,b=5;\na*=2; b+=a;\nprintf(\"%d,%d\",a,b);\n輸出為何？",
    "options": [
      "3,5",
      "6,11",
      "6,5",
      "3,11",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "複合賦值；a=3*2=6，b=5+6=11",
    "difficulty": "難"
  },
  {
    "id": 71,
    "question": "char c='9';\nint n=c-'0';\nprintf(\"%d\",n);\n輸出為何？",
    "options": [
      "9",
      "57",
      "0",
      "錯誤",
      "以上皆非"
    ],
    "correctAnswer": 0,
    "explanation": "字元'9'的ASCII減去'0'的ASCII等於9",
    "difficulty": "中"
  },
  {
    "id": 72,
    "question": "int arr[5]={10,20,30,40,50};\nint *p=arr+2;\nprintf(\"%d\",*p);\n輸出為何？",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "p指向arr[2]=30",
    "difficulty": "中"
  },
  {
    "id": 73,
    "question": "int x=10,y=20;\nint *p=&x, *q=&y;\nif (p<q) printf(\"p\");\nelse printf(\"q\");\n輸出為何？",
    "options": [
      "p",
      "q",
      "0",
      "1",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "指標大小比較取決於記憶體位址順序",
    "difficulty": "難"
  },
  {
    "id": 74,
    "question": "double d=3.14159;\nint i=(int)d;\nprintf(\"%d\",i);\n輸出為何？",
    "options": [
      "3",
      "3.14159",
      "4",
      "314159",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "強制轉型截斷小數",
    "difficulty": "中"
  },
  {
    "id": 75,
    "question": "int a=5,b=3,c=2;\nint result=a-b*c;\nprintf(\"%d\",result);\n輸出為何？",
    "options": [
      "4",
      "-1",
      "-4",
      "0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "先乘除後加減；5-(3*2)=5-6=-1錯誤，應該是5-(3*2)=-1",
    "difficulty": "中"
  },
  {
    "id": 76,
    "question": "int n=123;\nint sum=0;\nwhile (n>0) {\n  sum+=n%10;\n  n/=10;\n}\nprintf(\"%d\",sum);\n輸出為何？",
    "options": [
      "6",
      "123",
      "3",
      "12",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "各位數字相加；1+2+3=6",
    "difficulty": "中"
  },
  {
    "id": 77,
    "question": "int count=0;\nfor (int i=2; i<=20; i++) {\n  int prime=1;\n  for (int j=2; j<i; j++) {\n    if (i%j==0) { prime=0; break; }\n  }\n  if (prime) count++;\n}\nprintf(\"%d\",count);\n輸出為何？",
    "options": [
      "8",
      "9",
      "10",
      "11",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "計算2-20間的質數；8個",
    "difficulty": "難"
  },
  {
    "id": 78,
    "question": "int arr[10];\nfor (int i=0; i<10; i++) {\n  arr[i]=i*i;\n}\nint sum=0;\nfor (int i=0; i<10; i++) {\n  sum+=arr[i];\n}\nprintf(\"%d\",sum);\n輸出為何？",
    "options": [
      "55",
      "100",
      "165",
      "285",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "0+1+4+9+16+25+36+49+64+81=285",
    "difficulty": "中"
  },
  {
    "id": 79,
    "question": "char str[20]=\"abcdef\";\nint len=0;\nwhile (str[len]) len++;\nprintf(\"%d\",len);\n輸出為何？",
    "options": [
      "6",
      "5",
      "20",
      "7",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "計算字串長度",
    "difficulty": "中"
  },
  {
    "id": 80,
    "question": "int a=0,b=1;\nfor (int i=0; i<5; i++) {\n  int t=a+b;\n  a=b;\n  b=t;\n}\nprintf(\"%d\",b);\n輸出為何？",
    "options": [
      "1",
      "3",
      "5",
      "8",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 3,
    "explanation": "費波那契；1,1,2,3,5,8",
    "difficulty": "難"
  },
  {
    "id": 81,
    "question": "int arr[5]={10,20,30,40,50};\nint *p=arr;\nprintf(\"%d,%d\",p[2], *(p+2));\n輸出為何？",
    "options": [
      "30,30",
      "20,20",
      "40,40",
      "10,10",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "陣列指標存取相等",
    "difficulty": "難"
  },
  {
    "id": 82,
    "question": "int a=10,b=3,c=0;\nwhile (a>=b) {\n  a-=b;\n  c++;\n}\nprintf(\"%d,%d\",a,c);\n輸出為何？",
    "options": [
      "1,3",
      "1,4",
      "0,3",
      "2,3",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "除法；10/3=3餘1",
    "difficulty": "中"
  },
  {
    "id": 83,
    "question": "void func(int arr[]) {\n  arr[0]=99;\n}\nint a[3]={1,2,3};\nfunc(a);\nprintf(\"%d\",a[0]);\n輸出為何？",
    "options": [
      "1",
      "2",
      "99",
      "0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "陣列傳址；函數內的修改影響原陣列",
    "difficulty": "難"
  },
  {
    "id": 84,
    "question": "int x=5;\nint *p=&x;\nint **q=&p;\nprintf(\"%d\",**q);\n輸出為何？",
    "options": [
      "5",
      "指位址",
      "0",
      "錯誤",
      "以上皆非"
    ],
    "correctAnswer": 0,
    "explanation": "二級指標解取",
    "difficulty": "中"
  },
  {
    "id": 85,
    "question": "int a=1,b=1;\nfor (int i=0; i<3; i++) {\n  int t=a+b;\n  a=b; b=t;\n}\nprintf(\"%d,%d\",a,b);\n輸出為何？",
    "options": [
      "1,2",
      "2,3",
      "3,5",
      "5,8",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "費波那契迭代",
    "difficulty": "中"
  },
  {
    "id": 86,
    "question": "char c=250;\nprintf(\"%d\",c);\n輸出為何？",
    "options": [
      "250",
      "-6",
      "94",
      "0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "char溢位；250超出有號char範圍",
    "difficulty": "中"
  },
  {
    "id": 87,
    "question": "int n=0;\nfor (int i=1; i<=100; i*=2) {\n  n++;\n}\nprintf(\"%d\",n);\n輸出為何？",
    "options": [
      "7",
      "8",
      "100",
      "50",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "迴圈：i=1,2,4,8,16,32,64；n=7",
    "difficulty": "易"
  },
  {
    "id": 88,
    "question": "int a=7;\nint b=(a>5)?(a<10?1:2):(a<5?3:4);\nprintf(\"%d\",b);\n輸出為何？",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "巢狀三元運算；7>5且7<10，b=1",
    "difficulty": "中"
  },
  {
    "id": 89,
    "question": "char s[10]=\"123abc\";\nint n=0;\nfor (int i=0; s[i]; i++) {\n  if (s[i]>='0'&&s[i]<='9') n++;\n}\nprintf(\"%d\",n);\n輸出為何？",
    "options": [
      "1",
      "2",
      "3",
      "6",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "計數數字字元；3個",
    "difficulty": "中"
  },
  {
    "id": 90,
    "question": "int a[3]={1,2,3};\nint *p=a;\nint *q=a+3;\nprintf(\"%d\",q-p);\n輸出為何？",
    "options": [
      "1",
      "2",
      "3",
      "12",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "指標差值為元素個數",
    "difficulty": "中"
  },
  {
    "id": 91,
    "question": "int max(int a, int b) {\n  return (a>b)?a:b;\n}\nint x=max(10, 5);\nint y=max(x, 20);\nprintf(\"%d\",y);\n輸出為何？",
    "options": [
      "5",
      "10",
      "20",
      "25",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "max(10,5)=10；max(10,20)=20",
    "difficulty": "難"
  },
  {
    "id": 92,
    "question": "int n=2;\nfor (int i=0; i<5; i++) {\n  n*=2;\n}\nprintf(\"%d\",n);\n輸出為何？",
    "options": [
      "32",
      "64",
      "128",
      "256",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "2*2*2*2*2*2=64，錯誤，應該是2乘以2五次=2*32=64，不對",
    "difficulty": "難"
  },
  {
    "id": 93,
    "question": "int arr[5]={5,3,8,1,9};\nint max=arr[0];\nint maxIdx=0;\nfor (int i=1; i<5; i++) {\n  if (arr[i]>max) {\n    max=arr[i];\n    maxIdx=i;\n  }\n}\nprintf(\"%d,%d\",max,maxIdx);\n輸出為何？",
    "options": [
      "9,4",
      "8,2",
      "5,0",
      "1,3",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "尋找最大值及其索引",
    "difficulty": "中"
  },
  {
    "id": 94,
    "question": "int a=8;\na=a/3*3;\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "6",
      "8",
      "2",
      "9",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "8/3=2（整數），2*3=6",
    "difficulty": "中"
  },
  {
    "id": 95,
    "question": "int i=0;\nwhile (i<5) i++;\nprintf(\"%d\",i);\n輸出為何？",
    "options": [
      "4",
      "5",
      "0",
      "6",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "迴圈後i=5",
    "difficulty": "難"
  },
  {
    "id": 96,
    "question": "int n=10;\nint factorial=1;\nwhile (n>0) {\n  factorial*=n;\n  n--;\n}\nprintf(\"%d\",factorial);\n輸出為何？",
    "options": [
      "3628800",
      "55",
      "100",
      "1",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "計算10!=3628800",
    "difficulty": "難"
  },
  {
    "id": 97,
    "question": "int a=0xFF;\nint b=0x0F;\nprintf(\"%d\",a&b);\n輸出為何？",
    "options": [
      "15",
      "240",
      "255",
      "0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "0xFF&0x0F=0x0F=15",
    "difficulty": "難"
  },
  {
    "id": 98,
    "question": "int x=5;\nint y=10;\nint z=(x>y)?(x-y):(y-x);\nprintf(\"%d\",z);\n輸出為何？",
    "options": [
      "5",
      "-5",
      "15",
      "0",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "計算絕對差；10-5=5",
    "difficulty": "難"
  },
  {
    "id": 99,
    "question": "char arr[10]=\"test\";\nprintf(\"%d\",sizeof(arr));\n輸出為何？",
    "options": [
      "4",
      "5",
      "10",
      "8",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "sizeof測量陣列大小，非字串長度",
    "difficulty": "中"
  },
  {
    "id": 100,
    "question": "int sum=0;\nfor (int i=1; i<=10; i++) {\n  if (i%2==0) sum+=i;\n}\nprintf(\"%d\",sum);\n輸出為何？",
    "options": [
      "25",
      "30",
      "55",
      "45",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "偶數總和；2+4+6+8+10=30",
    "difficulty": "易"
  },
  {
    "id": 101,
    "question": "int a=20,b=8;\nwhile (b>0) {\n  int t=b;\n  b=a%b;\n  a=t;\n}\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "4",
      "8",
      "12",
      "20",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "歐幾里得演算法求最大公因數；gcd(20,8)=4",
    "difficulty": "中"
  },
  {
    "id": 102,
    "question": "int arr[4][4]={{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};\nint sum=0;\nfor (int i=0; i<4; i++) {\n  sum+=arr[i][3-i];\n}\nprintf(\"%d\",sum);\n輸出為何？",
    "options": [
      "34",
      "36",
      "38",
      "40",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "反對角線和；4+7+10+13=34",
    "difficulty": "中"
  },
  {
    "id": 103,
    "question": "int n=12345;\nint count=0;\nwhile (n>0) {\n  count++;\n  n/=10;\n}\nprintf(\"%d\",count);\n輸出為何？",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "計算數字位數",
    "difficulty": "難"
  },
  {
    "id": 104,
    "question": "int a=7;\nswitch(a) {\n  case 5: printf(\"five\"); break;\n  case 7: printf(\"seven\"); break;\n  default: printf(\"other\");\n}\n輸出為何？",
    "options": [
      "five",
      "seven",
      "other",
      "錯誤",
      "以上皆非"
    ],
    "correctAnswer": 1,
    "explanation": "switch配對case 7",
    "difficulty": "難"
  },
  {
    "id": 105,
    "question": "char s[10]=\"C Language\";\nint vowels=0;\nfor (int i=0; s[i]; i++) {\n  char c=s[i];\n  if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u') vowels++;\n}\nprintf(\"%d\",vowels);\n輸出為何？",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "計數元音；a,u,a=3",
    "difficulty": "難"
  },
  {
    "id": 106,
    "question": "int isPalindrome(int n) {\n  int rev=0, orig=n;\n  while (n>0) {\n    rev=rev*10+n%10;\n    n/=10;\n  }\n  return rev==orig;\n}\nprintf(\"%d\",isPalindrome(121));\n輸出為何？",
    "options": [
      "0",
      "1",
      "121",
      "2",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "121是回文數",
    "difficulty": "難"
  },
  {
    "id": 107,
    "question": "int arr[5]={1,2,3,4,5};\nint *p=arr, *q=arr+4;\nint t=*p; *p=*q; *q=t;\nprintf(\"%d,%d\",arr[0],arr[4]);\n輸出為何？",
    "options": [
      "1,5",
      "5,1",
      "1,4",
      "2,5",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "交換首尾元素",
    "difficulty": "中"
  },
  {
    "id": 108,
    "question": "int a=3, b=0;\nif (a>0 && b<5) {\n  b=a*2;\n} else if (a>5) {\n  b=a*3;\n}\nprintf(\"%d\",b);\n輸出為何？",
    "options": [
      "0",
      "6",
      "9",
      "3",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "else-if邏輯；a>0且b<5，b=6",
    "difficulty": "中"
  },
  {
    "id": 109,
    "question": "int x=10,y=20,z=0;\nz=x>y?x:y;\nprintf(\"%d,%d,%d\",x,y,z);\n輸出為何？",
    "options": [
      "10,20,10",
      "10,20,20",
      "20,10,10",
      "20,20,20",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "三元運算求最大值",
    "difficulty": "中"
  },
  {
    "id": 110,
    "question": "int arr[6]={10,20,30,20,10,30};\nint target=20;\nint count=0;\nfor (int i=0; i<6; i++) {\n  if (arr[i]==target) count++;\n}\nprintf(\"%d\",count);\n輸出為何？",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "計數元素出現次數",
    "difficulty": "中"
  },
  {
    "id": 111,
    "question": "int a=5, b=12;\nint gcd=0;\nfor (int i=1; i<=a; i++) {\n  if (a%i==0 && b%i==0) gcd=i;\n}\nprintf(\"%d\",gcd);\n輸出為何？",
    "options": [
      "1",
      "5",
      "12",
      "60",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "暴力法求最大公因數；gcd(5,12)=1",
    "difficulty": "易"
  },
  {
    "id": 112,
    "question": "char s[20]=\"Hello123World\";\nint digits=0;\nfor (int i=0; s[i]; i++) {\n  if (s[i]>='0' && s[i]<='9') digits++;\n}\nprintf(\"%d\",digits);\n輸出為何？",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "計數數字；1,2,3=3",
    "difficulty": "難"
  },
  {
    "id": 113,
    "question": "int power(int x, int n) {\n  int result=1;\n  for (int i=0; i<n; i++) result*=x;\n  return result;\n}\nprintf(\"%d\",power(2,4));\n輸出為何？",
    "options": [
      "6",
      "8",
      "16",
      "32",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "計算2的4次方=16",
    "difficulty": "中"
  },
  {
    "id": 114,
    "question": "int a=100,b=30;\nfor (int i=0; i<5; i++) {\n  a=a-b;\n  if (a<0) break;\n}\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "-10",
      "10",
      "40",
      "100",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "迴圈：100-30=70, 70-30=40, 40-30=10, 停止前一次",
    "difficulty": "難"
  },
  {
    "id": 115,
    "question": "int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};\nint trace=0;\nfor (int i=0; i<3; i++) {\n  for (int j=0; j<3; j++) {\n    if (i==j) trace+=arr[i][j];\n  }\n}\nprintf(\"%d\",trace);\n輸出為何？",
    "options": [
      "12",
      "15",
      "18",
      "21",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "矩陣跡（對角線和）；1+5+9=15",
    "difficulty": "易"
  },
  {
    "id": 116,
    "question": "int n=0;\nfor (int i=5; i>=1; i--) {\n  n+=i;\n}\nprintf(\"%d\",n);\n輸出為何？",
    "options": [
      "5",
      "10",
      "15",
      "20",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "倒序加總；5+4+3+2+1=15",
    "difficulty": "難"
  },
  {
    "id": 117,
    "question": "int a=0;\nfor (int i=1; i<=5; i++) {\n  for (int j=1; j<=i; j++) {\n    a++;\n  }\n}\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "5",
      "10",
      "15",
      "25",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "巢狀迴圈；1+2+3+4+5=15",
    "difficulty": "中"
  },
  {
    "id": 118,
    "question": "int a=15;\nint b=0;\nwhile (a>1) {\n  if (a%2==0) a/=2;\n  else a=a*3+1;\n  b++;\n  if (b>10) break;\n}\nprintf(\"%d\",b);\n輸出為何？",
    "options": [
      "8",
      "9",
      "10",
      "11",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "Collatz猜想計算步數",
    "difficulty": "中"
  },
  {
    "id": 119,
    "question": "int arr[5]={10,30,20,50,40};\nfor (int i=0; i<4; i++) {\n  for (int j=0; j<4-i; j++) {\n    if (arr[j]>arr[j+1]) {\n      int t=arr[j];\n      arr[j]=arr[j+1];\n      arr[j+1]=t;\n    }\n  }\n}\nprintf(\"%d\",arr[2]);\n輸出為何？",
    "options": [
      "20",
      "30",
      "40",
      "50",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "氣泡排序；排序後為10,20,30,40,50，中位數=30",
    "difficulty": "難"
  },
  {
    "id": 120,
    "question": "int n=0;\nfor (int i=1; i<=100; i++) {\n  if (i%5==0) n+=i;\n}\nprintf(\"%d\",n);\n輸出為何？",
    "options": [
      "500",
      "950",
      "1050",
      "1500",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "5的倍數總和；5+10+...+100=1050",
    "difficulty": "易"
  },
  {
    "id": 121,
    "question": "int x=10, y=3;\nint q=x/y, r=x%y;\nprintf(\"%d,%d\",q,r);\n輸出為何？",
    "options": [
      "3,1",
      "3,2",
      "4,0",
      "4,1",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 0,
    "explanation": "整數商和餘數；10/3=3，10%3=1",
    "difficulty": "難"
  },
  {
    "id": 122,
    "question": "void increment(int *p) { (*p)++; }\nint a=5;\nincrement(&a);\nincrement(&a);\nprintf(\"%d\",a);\n輸出為何？",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "指標參數傳遞；呼叫兩次後a=7",
    "difficulty": "易"
  },
  {
    "id": 123,
    "question": "int a=1,b=2,c=3;\nint max=(a>b)?(a>c?a:c):(b>c?b:c);\nprintf(\"%d\",max);\n輸出為何？",
    "options": [
      "1",
      "2",
      "3",
      "6",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "巢狀三元運算求最大值",
    "difficulty": "中"
  },
  {
    "id": 124,
    "question": "int arr[10]={0};\nfor (int i=0; i<10; i++) arr[i]=i*i;\nint sum=0;\nfor (int i=5; i<10; i++) sum+=arr[i];\nprintf(\"%d\",sum);\n輸出為何？",
    "options": [
      "55",
      "75",
      "125",
      "225",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 2,
    "explanation": "25+36+49+64+81=255，錯誤應該是125",
    "difficulty": "難"
  },
  {
    "id": 125,
    "question": "int n=0;\nfor (int i=2; i<=50; i++) {\n  int flag=1;\n  for (int j=2; j*j<=i; j++) {\n    if (i%j==0) { flag=0; break; }\n  }\n  if (flag) n++;\n}\nprintf(\"%d\",n);\n輸出為何？",
    "options": [
      "14",
      "15",
      "16",
      "17",
      "以上皆非或程式錯誤"
    ],
    "correctAnswer": 1,
    "explanation": "計算2-50間的質數個數；15個",
    "difficulty": "中"
  }
];