import { BinarySearchTreeNode } from './BinarySearchTreeNode';

export class BinarySearchTree {
    private root: BinarySearchTreeNode;
    constructor(value: any) {
        this.root = new BinarySearchTreeNode(value, null, null);
    }

    insert(nodeValue: any): void {
        if (!nodeValue) return;
        if (!this.root) {
            this.root = new BinarySearchTreeNode(nodeValue, null, null);
            return;
        }
        this.parseToInsert(this.root, nodeValue);
    }

    parseToInsert(node: BinarySearchTreeNode, value: any): void {
        if (value > node.value) {
            if (!node.right) {
                node.right = new BinarySearchTreeNode(value, null, null);
                return;
            }
            this.parseToInsert(node.right, value);
        } else {
            if (!node.left) {
                node.left = new BinarySearchTreeNode(value, null, null);
                return;
            }
            this.parseToInsert(node.left, value);
        }
    }

    remove(nodeValue: any): void {
        // To do
    }

    lookup(nodeValue: any): void {
        // To do
    }
}
