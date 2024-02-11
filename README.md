In this exercise I used JavaScript's class syntax to write classes for nodes and linked lists.

A linked list is fundamentally an object with a single key-value pair. The key is the "head" which points to an object containing two key-value pairs. The first contains the data and the second stores another object (node) with the same structure. This chain continues until one of the nodes has a value but points to null.

The linkedList class forms the data structure from a starting node, which the Node class can create. At the bottom of the file, there is an example of a linked list made with and without instantiating the classes.

The linkedList class also contains a series of useful methods for manipulating data inside a list.