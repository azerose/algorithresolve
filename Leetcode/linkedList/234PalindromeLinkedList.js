var isPalindrome = function (head) {
  console.log(head.length);

  const nodeLen = (node) => {
    if (node.next === null) {
      return 0;
    }
    let count = 1;
    while (node.next) {
      node = node.next;
      count += 1;
    }
    return count;
  };
  // node형식 (next,val)의 데이터의 길이를 측정하는 함수 nodeLen

  listLength = nodeLen(head);
  let arrayList = [];
  let currentNode = head;

  for (let i = 0; i < listLength; i++) {
    arrayList.push(currentNode.val);
    currentNode = currentNode.next; // 다음노드를 currentNode에 넣어줌
  }
  // 배열형식의 데이터로 만들기위한 반복문

  let mid = listLength % 2 === 0 ? listLength / 2 : Math.floor(listLength / 2);
  let left = arrayList.slice(0, mid);
  let right =
    listLength % 2 === 0
      ? arrayList.slice(mid, listLength).reverse()
      : arrayList.slice(mid + 1, listLength).reverse();

  const BooleanArr = (left, right) => {
    return (
      Array.isArray(left) &&
      Array.isArray(right) &&
      left.length === right.length &&
      left.every((val, index) => val === right[index])
    );
  }; // left와 right의 값이 같은지 비교하는 함수

  return BooleanArr(left, right);
};
