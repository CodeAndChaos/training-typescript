export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const arrayToList = (arr: Array<number>): ListNode => {
    let head = new ListNode();
    let last = head;

    for (let i = 0; i < arr.length; i++) {
        let current = new ListNode(arr[i])
        if (i === 0) {
            head = current;
        } else {
            last.next = current;
        }
        last = current;
    }
    return head;
}

export const listToArray = (list: ListNode | null): number[] => {
    let head: ListNode | null = list;
    let array = []
    while (head) {
        array.push(head.val)
        head = head.next;
    }
    return array;
}



export function partition(head: ListNode | null, x: number): ListNode | null {
    if(head === null || head.next === undefined) return head;
    const items = listToArray(head)
    const begin = [];
    const end = [];
    for(let val of items){
        if (val < x){
            begin.push(val)
        } else {
            end.push(val)
        }
    }
    return arrayToList([...begin, ...end]);
};