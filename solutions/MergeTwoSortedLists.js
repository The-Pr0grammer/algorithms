// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1); //how is this variable being updated?
    let prev = dummy;
    
    if(list1 === null){return list2}
    if(list2 === null){return list1}
    
    while (list1 && list2){
        console.log("dummy", dummy)
        console.log("prev", prev)
        if(list1.val <= list2.val){
            prev.next = list1
            prev = list1
            list1 = list1.next
        }
    else {
            prev.next = list2
            prev = list2
            list2 = list2.next
        }
    }
    
    if(!list1){
        prev.next = list2
    }
    else{
        prev.next = list1
    }
    
    console.log("return", dummy.next)
    return dummy.next
    
}
