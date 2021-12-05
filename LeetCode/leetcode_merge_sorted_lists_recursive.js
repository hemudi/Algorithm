// LeetCode
// Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(list1, list2){
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }

    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
}
