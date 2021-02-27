import { Component, Vue } from 'vue-property-decorator';
import { Queue } from './queue';
import { StackLinked } from './stack-linked-list';

@Component
export default class StackQueue extends Vue {
    consoleTextSimpleStack: string = '';
    consoleTextPeekStack: string = '';
    consoleTextSimplePop: string = '';
    consoleTextEnqueueQueue: string = '';
    consoleTextDequeue: string = '';
    intialQueueToDequeue: string = '';

    mounted() {
        this.createSimpleStack();
        this.createPeekSample();
        this.createSimplePop();
        this.createSimpleEnqueueQueue();

        // Dequeue example
        this.intialQueueToDequeue = this.queue.toArray().join(' => ');
    }

    public get queue(): Queue {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(87);
        queue.enqueue(100);
        return queue;
    }

    public dequeue(): void {
        this.consoleTextDequeue = this.queue.deQueue();
        this.intialQueueToDequeue = this.queue.toArray().join(' => ');
    }

    private createSimpleStack(): void {
        const stack = new StackLinked();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        this.consoleTextSimpleStack = stack.toString();
    }

    private createPeekSample(): void {
        const stack = new StackLinked();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(87);
        this.consoleTextPeekStack = stack.peek();
    }

    private createSimplePop(): void {
        const stack = new StackLinked();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(87);

        this.consoleTextSimplePop = stack.pop().value + '/**/' + stack.toString();
    }

    private createSimpleEnqueueQueue(): void {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(87);

        this.consoleTextEnqueueQueue = queue.toArray().join(' => ');
    }
}
