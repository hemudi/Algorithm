// LeetCode
// Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const head = new ListNode(-1);
let current = head;
let back;
const arr = [-7,7,-4,19,6,-9,-5,-2,-5]
const arr = []
let index = 0;
let pos = 9;

for(let num of arr){
    current.next = new ListNode(num);
    current = current.next;
    index++;

    if(index === pos){
        back = current;
    }
}

current.next = back;

var hasCycle = function(head) {
    const nodeSet = new Set();
    let current = head;

    if(!current) return false;

    while(current.next){
        if(nodeSet.has(current)){
            return true;
        }

        nodeSet.add(current);
        current = current.next;
    }
    return false;
}

// [-7,7,-4,19,6,-9,-5,-2,-5]
console.log(hasCycle2(head));