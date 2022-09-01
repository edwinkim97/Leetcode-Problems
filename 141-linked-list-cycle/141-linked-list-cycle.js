/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const visited = [];
    let position = head;
    
    while (position !== null) {
        console.log(position.val);
        if (visited.includes(position)) return true;
        visited.push(position);
        position = position.next;
    }
    return false;
};