import { StackLinked } from './stack-linked-list';

export class TwoStackQueue {
    stackIn: StackLinked = new StackLinked();
    stackOut: StackLinked = new StackLinked();

    public enqueue(value: any): void {
        this.stackIn.push(value);
    }

    public deQueue(): any {
        if (!this.stackOut.isEmpty()) {
            return this.stackOut.pop().value;
        }
        if (this.stackIn.isEmpty()) {
            return null;
        }
        let parser = this.stackIn.head;
        while (parser != null) {
            this.stackOut.push(this.stackIn.pop());
            parser = parser.next;
        }
        return this.stackOut.pop().value;
    }
}
