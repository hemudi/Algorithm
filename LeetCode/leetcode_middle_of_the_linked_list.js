// LeetCode
// Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/
var middleNode = function(head) {
    let curNode = head;
    let lastValue = 0;
    
    while(curNode.next !== null){
        curNode = curNode.next;
        lastValue++;
    }
    
    lastValue = lastValue / 2;
    curNode = head;
    
    while(lastValue-- > 0){
        curNode = curNode.next;
    }
    
    return curNode;
};