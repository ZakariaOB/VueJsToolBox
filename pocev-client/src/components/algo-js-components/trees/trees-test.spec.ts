import 'jest';
import { Helper } from '../../../utils/helper';
import { BinarySearchTree } from './Types/BinarySearchTree';

describe('TEST TREE OPERATIONS', () => {
    test('TEST TREE INSERT', () => {
        const tree = new BinarySearchTree(10);
        tree.insert(20);
        tree.insert(5);
        tree.insert(2);
        tree.insert(25);
        console.log(Helper.stringify(tree));
        expect(tree).toBeDefined();
    });
});
