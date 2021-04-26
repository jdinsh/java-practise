/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    console.log(head.val);
    if(head == null || head.next==null){

        return head;
    }

    p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    console.log('2>'+head.val+'>'+p.val)
    return p;

};

//two ways the problem can be solved, 1 way is recursive, calling the same value. its like sorting the value moving the head 2 positions.
//complete the recursive until we go tthe last value. it will reach last value, then previous value, then reduce accordingly.
