import { describe, it, expect } from "vitest";
import { toggleTodoCompletion } from "./todoService";  // Update with the correct import path
import { Todo } from "././../models/Todo";  // Assuming Todo class is imported if needed

describe("toggleTodoCompletion function", () => {
  it("should toggle the completion status of a todo item", () => {
    // Test for completed: false -> true
    const todo = new Todo(1, "Test Todo", false);
    const updatedTodo = toggleTodoCompletion(todo);
    expect(updatedTodo.completed).toBe(true);

    // Test for completed: true -> false
    const todo2 = new Todo(2, "Another Todo", true);
    const updatedTodo2 = toggleTodoCompletion(todo2);
    expect(updatedTodo2.completed).toBe(false);
  });
});
