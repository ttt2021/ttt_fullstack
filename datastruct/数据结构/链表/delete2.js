// 给定一个排序链表，删除所有的含有重复数字的结点，只保留原始链表中没有重复出现的数字

// 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5   // 1 -> 2 -> 5

// dummy

const deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }

  // dummy
  let dummy = new ListNode() 
  // dummy 永远指向头结点
  dummy.next  = head
  let cur = dummy

  // cur 后面必须要有两个结点
  while (cur.next && cur.next.next) {
    // 对两个结点进行比较
    if (cur.next.val === cur.next.next.val) {
      // 记入重复的值
      let val = cur.next.val
      while (cur.next && cur.next.val === val) {
        // 删除
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}