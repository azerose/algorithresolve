try:
    T=int(input().strip())

    for i in range(1,T+1):
        a,b=map(int,input().strip().split())
        print(f"Case #{i}: {a+b}")

except ValueError:
    print("정수만 입력해주세요")

except :
    print("오류 발생")