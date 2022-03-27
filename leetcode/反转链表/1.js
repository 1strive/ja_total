/*
 * @Author: JA
 * @Date: 2022-03-12 23:54:18
 * @LastEditTime: 2022-03-13 00:36:47
 * @LastEditors: JA
 */
function List() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.getAll = getAll;
    this.findPrevious = findPrevious;
}

function Node(element) {
    this.element = element;
    this.next = null;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    if (current == null)
        return console.log("can't find the item");
    newNode.next = current.next;
    current.next = newNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next != null)
        prevNode.next = prevNode.next.next;
}

function findPrevious(item) {
    var currNode = this.head;
    while (currNode.next != null && currNode.next.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function getAll() {
    var current = this.head;
    while (current.next != null) {
        console.log(current.next.element);
        current = current.next;
    }
}

//反转链表

function reverseList(head){
    let pre = null
    let cur = head
    while(cur){
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}