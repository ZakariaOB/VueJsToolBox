import { isNullOrUndefined } from '../../../utils/isNullOrUndefined';
import { fNode } from '../linked-list/f-linked-list/f-node';

export class Queue {
    // 1
    // enqueu  2 =>  2 < 1
    // dequeue 3 =>  3 < 2 < 1
    head: fNode;
    tail: fNode;

    public enqueue(nodeValue: any): void {
        if (isNullOrUndefined(nodeValue)) return;

        let newNode = new fNode(nodeValue, null);

        if (isNullOrUndefined(this.head)) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.next = newNode;
            this.head = newNode;
        }
    }

    public deQueue(): any {
        if (this.head == null || this.tail == null) {
            return null;
        }
        let valueToReturn = this.tail.value;
        this.tail = this.tail.next;
        return valueToReturn;
    }

    public toArray(): any[] {
        let result = [];
        let parser = this.tail;
        while (parser != null) {
            result.push(parser.value);
            parser = parser.next;
        }
        return result;
    }
}
