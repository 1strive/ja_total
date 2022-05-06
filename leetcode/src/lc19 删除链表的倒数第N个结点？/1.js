function NodeList(val) {
    this.val = val
    this.next = null
}
//反转链表
function reverseList(head) {
    let pre = null
    let cur = head
    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}

function removeNthFromEnd(head, n) {
    const res = reverseList(head)
    console.log(res);
    while(res){
        res = res.next
        
    }
}

