# 1. 같은눈 3개 = 10,000+(같은 눈)*1,000
# 2. 같은눈 2개 = 1,000+(같은 눈)* 100
# 3. 모두 다른 눈 = (가장 큰 눈)*100
try:
    A, B, C = map(int, input().split())
    if A == B == C:
        result = 10000 + A * 1000
    elif A == B or A == C:
        result = 1000 + A * 100
    elif B == C:
        result = 1000 + B * 100
    else:
        result = max(A, B, C) * 100
    print(result)
except ValueError:
    print("정수를 입력하세요.")
except Exception as e:
    print("오류 발생:", e)
