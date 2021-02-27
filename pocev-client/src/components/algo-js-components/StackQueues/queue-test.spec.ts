import 'jest';
import { Queue } from './queue';
import { TwoStackQueue } from './two-stack-queue';

describe('TEST QUEUE', () => {
    test('TEST Enqueue (Linked queue)', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(15);
        var item1 = queue.deQueue();
        var item2 = queue.deQueue();
        var item3 = queue.deQueue();
        var item4 = queue.deQueue();
        expect(item4).toEqual(null);
    });
    test('TEST Enqueue (Two staks queue)', () => {
        const queue = new TwoStackQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(15);

        queue.deQueue();
        queue.deQueue();
        queue.deQueue();

        expect(queue.deQueue()).toEqual(null);
    });
});
