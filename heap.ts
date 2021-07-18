// A priority queue implementation with the minimum value at the root
interface HeapNode<T> {
  priority: number;
  item: T;
}
export class MinHeap {
  private items: HeapNode<any>[];

  constructor() {
    this.items = [];
  }

  insert(item: HeapNode<any>): boolean {
    if (!this.items.length) {
      this.items.push(item);
      return true;
    }
    this.items.push(item);
    return this.bubbleUp();
  }

  private bubbleUp(): boolean {
    let idx = this.items.length;
    let parentIdx = idx >>> 1; // bit shifting is floor(item/2)
    let temp;

    while (parentIdx >= 0 && this.items[parentIdx].priority > this.items[idx].priority) {
      temp = this.items[idx];
      this.items[idx] = this.items[parentIdx];
      this.items[parentIdx] = temp;

      idx = parentIdx;
      parentIdx = idx >>> 1;
    }

    return true;
  }

  extractMin(): HeapNode<any> | null {
    if (!this.items.length) return null;

    let min = this.items[0];
    let max = this.items.pop();

    if (this.items.length) {
      this.items[0] = max;
      this.rebalance();
    }

    return min;
  }

  private rebalance(): void {
    let parentIdx = 0;
    let leftChildIdx = 0;
    let rightChildIdx = 0;
    let len = this.items.length;
    let parentNode = this.items[parentIdx];
    let swapIdx = 0;
    let swapped = false;

    while (true) {
      leftChildIdx = (2 * parentIdx) + 1;
      rightChildIdx = (2 * parentIdx) + 2;
      swapped = false;
      let leftChild = null;
      let rightChild = null;

      if (leftChildIdx < len) {
        leftChild = this.items[leftChildIdx];

        if (parentNode.priority > leftChild.priority) {
          swapIdx = leftChildIdx;
          swapped = true;
        }
      }

      if (rightChildIdx < len) {
        rightChild = this.items[rightChildIdx];

        if ((swapped && leftChild.priority > rightChild.priority) ||
          (!swapped && parentNode.priority > rightChild.priority)) {
          parentIdx = rightChildIdx;
          swapped = true;
        }
      }

      if (!swapped) {
        return;
      } else {
        this.items[parentIdx] = this.items[swapIdx];
        this.items[swapIdx] = parentNode;
        parentIdx = swapIdx;
      }
    }
  }
}
