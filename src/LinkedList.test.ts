import { describe, beforeEach, it, expect } from "vitest";
import { ListNode, LinkedList } from "./LinkedList";

describe("LinkedList", () => {
  let list: LinkedList;

  beforeEach(() => {
    list = new LinkedList();
  });

  it("should have a push method", () => {
    expect(typeof list.push).toBe("function");
  });

  it("should have head set to null when list is made", () => {
    expect(list.head).toBeNull();
  });

  it("should push first element to head", () => {
    list.push(5);
    expect(list.head?.value).toBe(5);
    expect(list.head?.next).toBeNull();
  });

  it("should push multiple elements", () => {
    list.push(0);
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.head?.value).toBe(0);
    expect(list.head?.next?.value).toBe(1);
    expect(list.head?.next?.next?.value).toBe(2);
    expect(list.head?.next?.next?.next?.value).toBe(3);
    expect(list.head?.next?.next?.next?.next).toBeNull();
  });

  it("should return true if list contains a value", () => {
    list.push(3);
    list.push(7);
    list.push(6);
    list.push(4);
    expect(list.contains(3)).toBe(true);
    expect(list.contains(7)).toBe(true);
    expect(list.contains(6)).toBe(true);
    expect(list.contains(4)).toBe(true);
  });

  it("should return false if list doesn't contain value", () => {
    list.push(3);
    list.push(7);
    list.push(4);
    expect(list.contains(2)).toBe(false);
    expect(list.contains(6)).toBe(false);
  });

  describe.skip("BONUS", () => {
    it("should have addToHead method", () => {
      expect(list.addToHead).to.be.a("function");
    });

    it("should add value to head", () => {
      list.push(0);
      list.push(1);
      list.push(2);
      expect(list.head?.value).toBe(0);
      expect(list.head?.next?.value).toBe(1);
      expect(list.head?.next?.next?.value).toBe(2);
      expect(list.head?.next?.next?.next).toBeNull();
      list.addToHead(3);
      expect(list.head?.value).toBe(3);
      expect(list.head?.next?.value).toBe(0);
      expect(list.head?.next?.next?.value).toBe(1);
      expect(list.head?.next?.next?.next?.value).toBe(2);
      expect(list.head?.next?.next?.next?.next).toBeNull();
      list.addToHead(4);
      expect(list.head?.value).toBe(4);
      expect(list.head?.next?.value).toBe(3);
      expect(list.head?.next?.next?.value).toBe(0);
      expect(list.head?.next?.next?.next?.value).toBe(1);
      expect(list.head?.next?.next?.next?.next?.value).toBe(2);
      expect(list.head?.next?.next?.next?.next?.next).toBeNull();
    });

    it("the constructor should take a variable number of arguments. It will add each of the arguments to the list upon instantiation", () => {
      const newList = new LinkedList(5, 1, 2, 6, 8);
      expect(newList.head?.value).toBe(5);
      expect(newList.head?.next?.value).toBe(1);
      expect(newList.head?.next?.next?.value).toBe(2);
      expect(newList.head?.next?.next?.next?.value).toBe(6);
      expect(newList.head?.next?.next?.next?.next?.value).toBe(8);
      expect(newList.head?.next?.next?.next?.next?.next).toBeNull();
    });

    it("should insert node at as the head", () => {
      list.insert(5, 0);
      expect(list.head?.value).toBe(5);
    });

    it("should insert node at as the tail and the tail node remains unchanged", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.insert(8, 3);
      expect(list.head?.next?.next?.next?.next?.value).toBe(4);
    });

    it("should insert node at any given position", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.insert(8, 3);
      expect(list.head?.next?.next?.next?.value).toBe(8);
    });
  });
});

// remove .skip to enable tests
describe.skip("Doubly Linked List", () => {
  let list: LinkedList;

  beforeEach(() => {
    list = new LinkedList();
  });

  it("nodes should have back property", () => {
    const node = new ListNode(0);
    expect(node).toHaveProperty("back");
  });

  it("should link back reference to previous node when node is pushed to list", () => {
    list.push(0);
    list.push(1);
    list.push(2);
    expect(list.head?.value).toBe(0);
    expect(list.head?.next?.value).toBe(1);
    expect(list.head?.next?.next?.value).toBe(2);
    expect(list.head).toBe(list.head?.next?.back);
    expect(list.head?.next).toBe(list.head?.next?.next?.back);
  });
});
