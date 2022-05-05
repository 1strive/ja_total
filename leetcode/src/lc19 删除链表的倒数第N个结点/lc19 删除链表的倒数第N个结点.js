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
    const arr = arrayToNodeList(head)
    const ans = arr.splice(-n, 1)
    const node = nodeListToArray(ans)
    return node
}



function arrayToNodeList(list) {
    let header = new NodeList(0)
    let current = header
    for (let i = 0; i < list.length; i++) {
        current.next = { val: list[i], next: null }
        current = current.next
    }
    return header.next
}

function nodeListToArray(node) {
    const list = []
    let header = node
    while (header) {
        list.push(header.val)
        header = header.next
    }
    return list
}

const arr = [1, 2, 3, 4, 5]
let n = 2
const ans = removeNthFromEnd(arr, n)
console.log(ans);