import sys
input = sys.stdin.read
data = input().split()

N = int(data[0])  # 첫 번째 값은 배열의 크기
Arr = list(map(int, data[1:N+1]))  # 그 다음 N개의 값이 배열의 원소들
v = int(data[N+1])  # 마지막 값이 찾으려는 값

count = Arr.count(v)  # 리스트에서 v의 개수를 셈
print(count)  # 개수를 출력
