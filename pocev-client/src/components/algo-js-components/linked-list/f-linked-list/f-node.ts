export class fNode {
    value: any;
    next: fNode;
    previous?: fNode;
    constructor(value: any, next: any) {
        this.value = value;
        this.next = next;
    }
}
