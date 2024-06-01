import sys

try:
    inputData =sys.stdin.read().strip().split("\n")

    for line in inputData:
        if line:
            a,b=map(int,line.split())
            print(a+b)

except ValueError:
    print("정수만 입력해 주세요")
except :
    print("오류 발생")