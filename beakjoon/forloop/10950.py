try:
    T=int(input().strip())

    for i in range(T):
        a,b=map(int,input().strip().split())
        print(a+b)

except ValueError:
    print("정수만 입력 가능합니다")

except :
    print("오류발생")