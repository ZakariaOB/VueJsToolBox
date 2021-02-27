import { Component, Vue } from 'vue-property-decorator';
import { FdoublyLinkedList } from './f-linked-list/f-doubly-linked-list';
import { fLinkedList } from './f-linked-list/f-linked-list';

@Component
export default class LinkedList extends Vue {
    consoleArrayAppend: string[] = [];
    consoleArrayPrepend: string[] = [];
    consoleArrayInsert: string[] = [];
    consoleArrayRemove: string[] = [];

    consoleArrayDoublyLinkedList: string[] = [];
    consoleArrayDoublyLinkedListInReverseList: string[] = [];

    consoleArrayReverse: string[] = [];

    mounted() {
        this.appendTest();
        this.prependTest();
        this.insertTest();
        this.removeTest();
        this.doulyLinkedList();
        this.reverseTest();
    }

    private appendTest(): void {
        const l = new fLinkedList(5);
        this.consoleArrayAppend.push(l.show());
        l.append(52);
        this.consoleArrayAppend.push(l.show());
        l.append(17);
        this.consoleArrayAppend.push(l.show());
        l.append(87);
        this.consoleArrayAppend.push(l.show());
        l.append(31);
        this.consoleArrayAppend.push(l.show());
    }

    private prependTest(): void {
        const l = new fLinkedList(5);
        this.consoleArrayPrepend.push(l.show());
        l.prepend(52);
        this.consoleArrayPrepend.push(l.show());
        l.prepend(17);
        this.consoleArrayPrepend.push(l.show());
        l.prepend(87);
        this.consoleArrayPrepend.push(l.show());
        l.prepend(31);
        this.consoleArrayPrepend.push(l.show());
    }

    private insertTest(): void {
        const l = new fLinkedList(16);
        l.insert(0, 17);
        this.consoleArrayInsert.push(l.show());
        l.append(22);
        l.insert(1, 15);
        this.consoleArrayInsert.push(l.show());
        l.append(25);
        l.append(26);
        l.append(27);
        l.append(28);
        l.insert(4, 66);
        this.consoleArrayInsert.push(l.show());
        l.insert(7, 100);
        this.consoleArrayInsert.push(l.show());
        l.insert(8, 101);
        this.consoleArrayInsert.push(l.show());
        l.insert(10, 102);
        this.consoleArrayInsert.push(l.show());
        l.insert(1, 115);
        this.consoleArrayInsert.push(l.show());
        l.insert(1, 200);
        this.consoleArrayInsert.push(l.show());
        l.insert(9, 9);
        this.consoleArrayInsert.push(l.show());
    }

    private removeTest(): void {
        const l = new fLinkedList(5);
        l.append(52);
        l.append(17);
        l.append(87);
        l.append(31);
        l.remove(4);
        this.consoleArrayRemove.push(l.show());
    }

    private doulyLinkedList(): void {
        const l = new FdoublyLinkedList(10);

        l.append(12);
        l.append(14);
        l.append(16);
        l.append(18);

        this.consoleArrayDoublyLinkedList.push(l.show());
        this.consoleArrayDoublyLinkedListInReverseList.push(l.show(true));
    }

    private reverseTest(): void {
        const l = new fLinkedList(10);
        l.append(12);
        l.append(14);
        l.append(15);
        l.append(18);
        l.reverse();
        this.consoleArrayReverse.push(l.show());
    }

    get consoleTextAppend(): string {
        return this.consoleArrayAppend.join('\n');
    }

    get consoleTextPrepend(): string {
        return this.consoleArrayPrepend.join('\n');
    }

    get consoleTextInsert(): string {
        return this.consoleArrayInsert.join('\n');
    }

    get consoleTextRemove(): string {
        return this.consoleArrayRemove.join('\n');
    }

    get consoleDoublyLinked(): string {
        return this.consoleArrayDoublyLinkedList.join('\n');
    }

    get consoleArrayDoublyLinkedListInReverse(): string {
        return this.consoleArrayDoublyLinkedListInReverseList.join('\n');
    }

    get consoleReverse(): string {
        return this.consoleArrayReverse.join('\n');
    }
}
