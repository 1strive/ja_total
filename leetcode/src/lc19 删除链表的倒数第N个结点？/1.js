function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const arr = [5, 4, 3, 2, 1]
const list = arrayToListNode(arr)
const ans = removeNthFromEnd(list, 2)
console.log(ans.next.next, 'ja');

///数组转链表
function arrayToListNode(list) {
    let header = new ListNode(0)
    let current = header
    for (let i = 0; i < list.length; i++) {
        current.next = { val: list[i], next: null }
        current = current.next
    }
    return header.next
}

function numList(head) {
    let m = 0
    while (head) {
        head = head.next
        m++
    }
    return m
}

function removeNthFromEnd(head, n) {
    let count = 0, list = new ListNode(0, head);
    console.log(list.next.next, 'list');
    let res = list;
    let len = numList(head)
    let m = len - n
    //删除第len-n+1个
    while (m) {
        res = res.next;//此时res指向head对应的next的地址值 所以res一定要是let声明，要是可变的，因为此处地址发生了改变
        m--
    }
    console.log(res,'res');
    console.log(list.next.next,'list2');
    res.next = res.next.next;
    console.log(list.next.next);
    return list.next;
};




