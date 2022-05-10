function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function removeNthFromEnd(head, n) {
    let newListNode = new ListNode(0, head);
    let frontward = newListNode;
    let backward = newListNode;
    let tempNum = 0;
    while (tempNum != n) {
        frontward = frontward.next;
        tempNum++;
    }

    while (frontward.next) {//frontward指向最后一个结点即可。
        frontward = frontward.next;
        backward = backward.next;
    }
    backward.next = backward.next.next;
    return newListNode.next;

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
console.log(ans.next.next, 'ans');
// 1、双指针法通常都可以使用在有关有序数组或者链表中的问题中。
// 2、这里使用的是和快慢指针、对撞指针有些差别的前后指针。
// 3、与快慢指针略微不同，前后指针两个指针每次前进的步数是一致的，只是出发的先后顺序不同。这样就可以实现当前指针先出发n步的时候，当前指针到达末尾（倒数第一个结点）则后指针到达倒数第N+1个结点（相差距离n步）。
