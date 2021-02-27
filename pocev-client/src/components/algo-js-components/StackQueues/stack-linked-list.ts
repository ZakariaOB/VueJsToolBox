import { fNode } from '../linked-list/f-linked-list/f-node';

export class StackLinked {
    head: fNode;
    tail: fNode;

    push(value: any) {
        if (value) {
            const newNode = new fNode(value, null);
            if (this.isEmpty()) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.tail;
                this.tail = newNode;
            }
        }
    }

    peek(): string {
        return this.tail.value;
    }

    pop(): fNode {
        const lastNode = this.tail;
        this.tail = this.tail.next;
        return lastNode;
    }

    isEmpty() {
        return this.tail == null;
    }

    toString(): string {
        const result = [];
        let parser = this.tail;
        while (parser != null) {
            result.push(parser.value);
            parser = parser.next;
        }
        return '[' + result.join('-') + ']';
    }
}

// s.push(1) => 1
// s.push(2) => 1 > 2
// s.push(3) => 1 > 2 > 3
// s.peek() => 3
// s.pop() => 3 /// 1 > 2
