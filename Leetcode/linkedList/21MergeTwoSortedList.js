var mergeTwoLists = function (list1, list2) {
  if (!list1 || list1.length === 0 || !list2 || list2.length === 0) {
    return null;
  }
  let head = new ListNode();
  let current = head;
  let i = 0;
  let j = 0;

  for (; i < list1.length && j < list2.length; ) {
    if (list1[i] < list2[j]) {
      current.next = new ListNode(list1[i]);
      i++;
    } else {
      current.next = new ListNode(list2[j]);
      j++;
    }
    current = current.next;
  }

  for (; i < list1.length; i++) {
    current.next = new ListNode(list1[i]);
    current = current.next;
  }
  for (; j < list2.length; j++) {
    current.next = new ListNode(list2[j]);
    current = current.next;
  }

  let res = head.next;

  function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }

  return linkedListToArray(res);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

mergeTwoLists([1, 2, 4], [1, 3, 4]);
