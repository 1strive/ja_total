function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function numList(head) {
    let num = 0
    while (head) {
        num++
        head = head.next
    }
    return num
}
function removeNthFromEnd(head, n) {
    let len = 0, count = 0, listNode = new ListNode(0, head);
    let listNode2 = listNode, listNode3 = listNode;
    console.log(listNode3);
    while (listNode2.next) {
        listNode2 = listNode2.next;
        len++;
    }
    //删除第len-n+1个
    while (count != len - n) {
        listNode3 = listNode3.next;
        count++;
    }
    console.log(listNode3);
    listNode3.next = listNode3.next.next;
    return listNode.next;
};

//数组转链表
function arrayToNodeList(list) {
    let header = new ListNode(0)
    let current = header
    for (let i = 0; i < list.length; i++) {
        current.next = { val: list[i], next: null }
        current = current.next
    }
    return header.next
}

const test = [5, 4, 3, 2, 1]
const head = arrayToNodeList(test)
const ans = removeNthFromEnd(head, 2)
console.log(ans, 'ans');
