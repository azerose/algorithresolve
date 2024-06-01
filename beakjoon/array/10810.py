n,m = map(int,input().split())
arr = [0]*n
for i in range(m):
    i,j,k = map(int,input().split())
    arr[i-1:j] = [k]*(j-i+1)
print(*arr)