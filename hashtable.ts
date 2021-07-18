import { LinkedList, Node } from './linkedlist';
export class HashTable {
  private readonly ALPHABET_LENGTH: number = 26;
  private readonly TABLE_SIZE: number = 500;
  private table: any[];

  constructor() {
    this.table = new Array(this.TABLE_SIZE);
  }

  hash(str: string): number {
    const strLength = str.length;
    return str.split('').map((char: string, idx: number) => {
      return Math.pow(this.ALPHABET_LENGTH, strLength - idx + 1) * char.charCodeAt(0)
    }).reduce((sum, charCode) => {
      return sum += charCode
    }, 0) % this.TABLE_SIZE;
  }

  search(item: any): any[] | null {
    let list = this.table[this.hash(item.key)];
    return list ? list.search(item.value) : null;
  }

  insert(item: any): void {
    let idx = this.hash(item.key);
    let list = this.table[idx];

    if (list) {
      list.insert(item.value);
    } else {
      list = new LinkedList<Node<T>>();
      list.insert(item.value);
      this.table[idx] = list;
    }
  }

  delete(item: any): void {
    let idx = this.hash(item.key);
    let list = this.table[idx];

    if (list) {
      list.delete(item.value);
    }
  }
}
