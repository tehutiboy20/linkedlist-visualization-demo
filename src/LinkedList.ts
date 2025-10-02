class ListNode<T> {
  value: T; // Stores the actual data for this node
  next: ListNode<T> | null; // Points to the next node in the chain (or null if last)

  constructor(val: T) {
    this.value = val; // Set the data value for this node
    this.next = null; // Initially no next node (we'll connect it later)
  }
}

class LinkedList<T> {
  head: ListNode<T> | null; // Points to the first node in the list (or null if empty)
  tail: ListNode<T> | null; // Points to the last node in the list (or null if empty)

  constructor() {
    this.head = null; // Start with empty list - no first node
    this.tail = null; // Start with empty list - no last node
  }

  // adds node to end of list
  push(value: T): void {
    const newNode = new ListNode<T>(value); // Create a new node with the given value
    
    if (this.head === null) { // Check if list is completely empty
      // If empty, new node becomes both head and tail
      this.head = newNode; // Point head to our new node (it's the first one)
      this.tail = newNode; // Point tail to our new node (it's also the last one)
    } else {
      // If list has items, add to the end
      this.tail!.next = newNode; // Connect current last node to our new node
      this.tail = newNode; // Update tail to point to our new node (now the last)
    }
  }

  // returns true if value is present in the list
  contains(value: T): boolean {
    let currentNode = this.head; // Start searching from the first node
    
    while (currentNode !== null) { // Keep going until we reach the end (null)
      if (currentNode.value === value) { // Check if current node has the value we want
        return true; // Found it! Return true immediately
      }
      currentNode = currentNode.next; // Move to the next node in the chain
    }
    
    return false; // Went through entire list without finding the value
  }

  // BONUS: adds node to beginning of list
  addToHead(value: T): void {
    const newNode = new ListNode<T>(value); // Create a new node with the given value
    
    if (this.head === null) { // Check if list is completely empty
      // If empty, new node becomes both head and tail
      this.head = newNode; // Point head to our new node
      this.tail = newNode; // Point tail to our new node
    } else {
      // If list has items, insert at the beginning
      newNode.next = this.head; // Connect new node to current first node
      this.head = newNode; // Update head to point to our new node (now the first)
    }
  }

  // BONUS: insert an item at the position specified
  insert(value: T, position: number): void {
    if (position === 0) { // Special case: inserting at the beginning
      this.addToHead(value); // Use our existing method to add to head
      return; // Exit early since we're done
    }
    
    const newNode = new ListNode<T>(value); // Create a new node with the given value
    let currentNode = this.head; // Start from the first node
    
    // Walk to the node right before where we want to insert
    for (let i = 0; i < position - 1 && currentNode !== null; i++) {
      currentNode = currentNode.next; // Move to next node
    }
    
    if (currentNode === null) { // Position is beyond the end of list
      return; // Can't insert, position is invalid
    }
    
    newNode.next = currentNode.next; // Connect new node to what comes after current
    currentNode.next = newNode; // Connect current node to our new node
    
    if (newNode.next === null) { // Check if we inserted at the very end
      this.tail = newNode; // Update tail to point to our new last node
    }
  }

  // BONUS: remove first occurrence of value from list
  removeItem(value: T): boolean {
    if (this.head === null) { // Check if list is empty
      return false; // Nothing to remove from empty list
    }
    
    if (this.head.value === value) { // Check if first node has the value
      this.head = this.head.next; // Move head to second node (removing first)
      if (this.head === null) { // Check if list is now empty
        this.tail = null; // Update tail to null since list is empty
      }
      return true; // Successfully removed the value
    }
    
    let currentNode = this.head; // Start from first node
    
    // Look for the node that comes right before the one we want to remove
    while (currentNode.next !== null) {
      if (currentNode.next.value === value) { // Check if next node has the value
        const nodeToRemove = currentNode.next; // Save reference to node we're removing
        currentNode.next = nodeToRemove.next; // Skip over the node we're removing
        
        if (nodeToRemove === this.tail) { // Check if we removed the last node
          this.tail = currentNode; // Update tail to previous node
        }
        
        return true; // Successfully removed the value
      }
      currentNode = currentNode.next; // Move to next node to continue searching
    }
    
    return false; // Value not found in the list
  }

  // BONUS: remove element at specified position in list
  removePosition(position: number): T | undefined {
    if (this.head === null || position < 0) { // Check for empty list or invalid position
      return undefined; // Nothing to remove
    }
    
    if (position === 0) { // Special case: removing first node
      const removedValue = this.head.value; // Save the value we're removing
      this.head = this.head.next; // Move head to second node
      if (this.head === null) { // Check if list is now empty
        this.tail = null; // Update tail to null since list is empty
      }
      return removedValue; // Return the value we removed
    }
    
    let currentNode = this.head; // Start from first node
    
    // Walk to the node right before the one we want to remove
    for (let i = 0; i < position - 1 && currentNode.next !== null; i++) {
      currentNode = currentNode.next; // Move to next node
    }
    
    if (currentNode.next === null) { // Position is beyond the end of list
      return undefined; // Can't remove, position is invalid
    }
    
    const nodeToRemove = currentNode.next; // Save reference to node we're removing
    const removedValue = nodeToRemove.value; // Save the value we're removing
    currentNode.next = nodeToRemove.next; // Skip over the node we're removing
    
    if (nodeToRemove === this.tail) { // Check if we removed the last node
      this.tail = currentNode; // Update tail to previous node
    }
    
    return removedValue; // Return the value we removed
  }
}

export { ListNode, LinkedList };
