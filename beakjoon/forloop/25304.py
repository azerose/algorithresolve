try:
    total=int(input().strip())
    N = int(input().strip())
    count=0
    for i in range(0,N):
        a,b=map(int,input().strip().split())
        count += a*b

    if total == count :
        print("Yes")
    else :
        print("No")

except ValueError:
    print("정수를 입력해주세요.")
except:
    print("오류가 발생했습니다.")

