try:
    while 1 :
        a,b=map(int,input().strip().split())
        if a == 0 & b==0 :
            break
        else :
            print(f"{a+b}")


except ValueError:
    print("정수를 입력해 주세요.")
except :
    print("오류 발생")

