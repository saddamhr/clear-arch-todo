import { describe, it, expect } from "vitest";
import { Todo } from "./Todo";

describe("Todo Model", () => {
  it("should create a valid Todo item with default completed value", () => {
    const todo = new Todo(2, "Another Test Todo");
    expect(todo.completed).toBe(false);
  });

  it("should mark a Todo item as completed", () => {
    const todo = new Todo(3, "Test Todo");
    todo.completed = true; // Simulate marking it completed
    expect(todo.completed).toBe(true);
  });
});
