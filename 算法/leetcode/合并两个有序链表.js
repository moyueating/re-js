/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
    输出：[1,1,2,3,4,4]
    输入：l1 = [], l2 = []
    输出：[]
    输入：l1 = [], l2 = [0]
    输出：[0]
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null){
        return l2
    }else if(l2 === null){
        return l1
    }else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};