try:
    A, B, C = map(int, input().split())
    total = A + B + C
    print(total)
except ValueError:
    print("정수를 입력해주세요.")
except:
    print("오류가 발생했습니다.")


