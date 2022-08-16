class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        var cnt = 0;
        var current = this.head;
        while (cnt !== idx) {
            current = current.next;
            cnt++;
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
        if (idx === this.length) this.push(val);
        if (idx === 0) this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(idx - 1);
        var tmp = prev.next;
        prev.next = newNode;
        newNode.next = tmp;
        this.length++;
        return true;
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return false;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        var prevNode = this.get(idx - 1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        // 1, 2, 3, 4 / node = 1
        // prev = null   =>  1->null
        // next = node.next = 2
        // prev = 1
        // node = 2  => 2->1->null
        //-----------
        // next = 3
        // node.next = prev = 1 => 


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
}

// var first = new Node('Hi');
// first.next = new Node('there');

// console.log(first);



let node = new SinglyLinkedList();
node.push(1);
node.push(2);
node.push(3);
node.push(4);

node.reverse()
// console.log(node.get(2));
node.print()


// Insertion = O(1)
// Removal = O(1) or O(n)
// Searching = O(n)
// Access = O(n)
// Why using this? Understandability for Stack or Queue