import { fNode } from './f-node';

export class FdoublyLinkedList {
    header: fNode;
    tail: fNode;
    length: number;
    constructor(value: any) {
        this.header = new fNode(value, null);
        this.tail = this.header;
        this.length++;
    }

    append(value: any) {
        if (!value) {
            return;
        }
        const newNode = new fNode(value, null);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
    }

    show(inReverse: boolean = false): string {
        if (!this.header) {
            return '';
        }
        const arrResult = [];
        let aNode = inReverse ? this.tail : this.header;
        let index = 0;
        while (aNode != null) {
            arrResult.push(`${aNode.value}(${index})`);
            aNode = inReverse ? aNode.previous : aNode.next;
            index++;
        }
        return arrResult.join(' => ');
    }
}
