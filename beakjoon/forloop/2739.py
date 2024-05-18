try:
    N=int(input().strip())

    for i in range(1,10):
        print(f"{N} * {i} = {N*i}")

except ValueError:
    print("정수를 입력해주세요.")
except:
    print("오류가 발생했습니다.")

