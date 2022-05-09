function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function removeNthFromEnd (head,n){
    let stack = new Array()
    let newListNode = new ListNode(0,head)
    let tempNode = newListNode
    while(tempNode){
        stack.push(tempNode)
        tempNode = tempNode.next
    }
    let tempNum = n
    while(tempNum){
        stack.pop()
        tempNum--
    }
    tempNode = stack.pop()
    tempNode.next = tempNode.next.next
    return newListNode.next
}
// 1、利用栈先入后出的特点，使得我们可以不用循环即可得到有序链表中的末尾的元素。
// 2、JS中用arrary实现栈的功能，首先将链表所有指针都push如栈。
// 3、然后pop出栈中的n+1个指针（既要删除倒数第N个结点，需要堆倒数第N+1个结点进行操作，使其指向倒数第N-1个结点。我们也可以先赋值第N个结点的指针指向null来实现内存释放）。
