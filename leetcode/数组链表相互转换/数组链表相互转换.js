/*
 * @Author: JA
 * @Date: 2022-04-27 19:51:48
 * @LastEditTime: 2022-04-27 20:16:22
 * @LastEditors: JA
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function NodeList(val) {
    this.val = val
    this.next = null
}

function removeNthFromEnd(head, n) {
    const arr = nodeListToArray(head)
    console.log(arr, 'arr');
    arr.splice(-n, 1)
    console.log(arr, 'ja');
    const node = arrayToNodeList(arr)
    return node
}

//数组转链表
function arrayToNodeList(list) {
    let header = new NodeList(0)
    let current = header
    for (let i = 0; i < list.length; i++) {
        current.next = { val: list[i], next: null }
        current = current.next
    }
    return header.next
}

//链表转数组
function nodeListToArray(node) {
    const list = []
    let header = node
    while (header) {
        list.push(header.val)
        header = header.next
    }
    return list
}
const t1 = [1, 2, 3, 4, 5]
const l1 = arrayToNodeList(t1)
const t2 = nodeListToArray(l1)

const ans = removeNthFromEnd(l1, 1)

console.log(l1);
console.log(t2);
console.log(ans, 'ans');