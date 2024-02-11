class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor(head = null) {
        this.head = head;
    }
    // Add a new node to the end of the list
    append(data) {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(data);
    }

    // Add a new node to the start of the lsit
    prepend(data) {
        let current = this.head;
        this.head = new Node(data);
        this.head.next = current;
    }

    // Check how many nodes are in the list
    size() {
        let size = 0;
        let current = this.head;
        while (current) {
            size += 1;
            current = current.next;
        }
        return size;
    }

    // Get the first node in the list
    getHead() {
        return this.head;
    }

    // Get the last node in the list
    getTail() {
        let last = false;
        let current = this.head;
        while (!last) {
            if (!current.next) last = true;
            else current = current.next;
        }
        return current;
    }

    // Retrieve a node at index;
    at(index) {
        let i = 0;
        let current = this.head;
        while (i < index) {
            current = current.next;
            i += 1;
        }
        return current
    }

    // Remove the last node from the list
    pop() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // Does the list contain certain data?
    contains(data) {
        let exists = false;
        let current = this.head;
        while (current) {
            if (current.value === data) exists = true;
            current = current.next;
        }
        return exists;
    }

    // Find the index of data in the list (if present)
    find(data) {
        let index = 0;
        let current = this.head;
        while (current) {
            if (current.value === data) {
                return index;
            }
            current = current.next;
            index += 1;
        }
        return null;
    }

    // return the list as a single string
    toString() {
        let output = `(head)`;
        let current = this.head;
        while (current) {
            output += ` -> (${current.value})`;
            current = current.next;
        }
        output += ' -> null'
        return output;
    }
    
    // Insert some data at an index in the list;
    insertAt(data, index) {
        let i = 0;
        let addition = new Node(data);
        let current = this.head;
        if (index === 0) {
            addition.next = current;
            this.head = addition;
            return;
        }
        index--;
        while (i < index) {
            current = current.next;
            i += 1;
        }
        addition.next = current.next;
        current.next = addition;
    }
    
    // Remove data at a certain index
    removeAt(index) {
        let i = 0;
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
            return;
        }
        index--;
        while (i < index) {
            current = current.next;
            i += 1;
        }
        let temp = current.next.next;
        current.next = temp;
    }
}

// An example made without the linkedList class
let myLinkedList = {
    head : {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
}

// Nodes are instantiated with the Node class, joined and then formally turned into a linked list
let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(10);
let node4 = new Node(-8);
node1.next = node2;
node2.next = node3;
node3.next = node4;

let myList = new linkedList(node1);