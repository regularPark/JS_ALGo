class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        var poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        else if (this.length / 2 >= idx) {
            var cnt = 0;
            var current = this.head;
            while (cnt !== idx) {
                current = current.next;
                cnt++;
            }
        } else {
            var cnt = this.length - 1;
            var current = this.tail;
            while (cnt !== idx) {
                current = current.prev;
                cnt--;
            }
        }
        return current;
    }
    set(idx, val) {
        var foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return this.push(val);
        if (idx === 0) return this.shift(val);
        var newNode = new Node(val);
        var prevNode = this.get(idx - 1);
        var nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return false;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        var removed = this.get(idx);
        var prevNode = removed.prev;
        var nextNode = removed.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    reverse() {
        if (!this.head) return null;
        if (this.length === 1) return this;

        this.tail = this.head.prev;
        let current;

        while (true) {
            if (!this.head.next) break;
            current = this.head.next;
            this.tail = this.head;
            this.tail.next = this.head.prev;
            this.tail.prev = this.head.next;
            this.head = current;
        }
    }
}

let list = new DoublyLinkedList();

list.push(99)
list.push(1);
list.push(2);
list.push('hello');
list.push(4);
list.push(5);
list.get(4);
list.insert(5, 'hi')
list.remove(3)

list.print()
list.reverse();
list.print()

// Insertion = O(1)
// Removal = O(1)
// Searching = O(N)
// Access = O(N)
// Technically searching is O(N/2) but that's still O(N)