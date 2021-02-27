import { fNode } from './f-node';

export class fLinkedList {
    header: fNode;
    tail: fNode;
    length: number;
    constructor(value: any) {
        this.header = new fNode(value, null);
        this.tail = this.header;
        length++;
    }

    append(value: any): void {
        if (!value) {
            return;
        }
        var newNode = new fNode(value, null);
        this.tail.next = newNode;
        this.tail = newNode;
        length++;
    }

    prepend(value: any): void {
        if (!value) {
            return;
        }
        var newNode = new fNode(value, this.header);
        this.header = newNode;
    }

    insert(index: number, value: any) {
        if (!value) {
            return;
        }
        let i = 1;
        let node = this.header;
        while (node != null) {
            if (i == index) {
                let newNode = new fNode(value, null);
                newNode.next = node.next;
                node.next = newNode;
                break;
            }
            node = node.next;
            i++;
        }
    }

    remove(index: number) {
        if (index <= 0 || index > length - 1) {
            return;
        }
        let i = 1;
        let node = this.header;
        while (node != null) {
            if (i == index) {
                node.next = node.next.next;
                break;
            }
            node = node.next;
            i++;
        }
    }

    show(): string {
        if (!this.header) {
            return '';
        }
        const arrResult = [];
        let aNode = this.header;
        var index = 0;
        while (aNode != null) {
            arrResult.push(`${aNode.value}(${index})`);
            aNode = aNode.next;
            index++;
        }
        return arrResult.join(' => ');
    }

    reverse(): void {
        if (!this.header) {
            return;
        }

        let firstNode = this.header;
        let secondNode = this.header.next;

        while (secondNode) {
            var tmp = secondNode.next;
            secondNode.next = firstNode;
            firstNode = secondNode;
            secondNode = tmp;
        }
        this.header.next = null;
        this.header = firstNode;
    }
}
