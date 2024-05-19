try:
    N=int(input().strip())
    answer=""
    for i in range(N//4):
        answer+= "long "
    print(f"{answer} int")



except ValueError:
    print("정수를 입력해주세요")
except:
    print("오류발생")