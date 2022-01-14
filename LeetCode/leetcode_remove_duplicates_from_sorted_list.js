// LeetCode
// Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// 11분 소요
 var deleteDuplicates = function(head) {
    const numCounter = {};
    let current = head;
    let previous = null;
    
    while(current){
        if(!numCounter[current.val]){
            numCounter[current.val] = true;
            previous = current;
        } else {
            previous.next = current.next;
        }
        
        current = current.next;
    }
    
    return head;
};