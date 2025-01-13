import { describe, it, expect, beforeEach } from "vitest";
import { fakeApi } from "./fakeApi"; // Make sure to import the correct path of your fakeApi

// Define the todos array globally in the test
let todos = [
  { id: 1, title: "Learn Vue.js", completed: false },
  { id: 2, title: "Apply Clean Architecture", completed: false },
];

describe("fakeApi", () => {
  // Before each test, reset the todos array to its initial state
  beforeEach(() => {
    // Resetting the todos array to initial values before each test
    todos.length = 0; 
    todos.push(
      { id: 1, title: "Learn Vue.js", completed: false },
      { id: 2, title: "Apply Clean Architecture", completed: false }
    );
  });

  describe("fetchTodos", () => {
    it("should return the list of todos", async () => {
      const result = await fakeApi.fetchTodos();
      expect(result).toEqual([
        { id: 1, title: "Learn Vue.js", completed: false },
        { id: 2, title: "Apply Clean Architecture", completed: false },
      ]);
    });
  });

  describe("addTodo", () => {
    it("should add a new todo to the list", async () => {
      const newTodo = { id: 3, title: "Learn Testing", completed: false };
      await fakeApi.addTodo(newTodo);

      const result = await fakeApi.fetchTodos();
      expect(result).toEqual([
        { id: 1, title: "Learn Vue.js", completed: false },
        { id: 2, title: "Apply Clean Architecture", completed: false },
        newTodo
      ]);
    });
  });

  describe("updateTodo", () => {
    it("should update an existing todo", async () => {
      const updatedTodo = { id: 1, title: "Learn Vue.js Updated", completed: true };
      await fakeApi.updateTodo(updatedTodo);

      const result = await fakeApi.fetchTodos();
      expect(result).toEqual([
        updatedTodo,
        { id: 2, title: "Apply Clean Architecture", completed: false },
        { id: 3, title: 'Learn Testing', completed: false }
      ]);
    });

    it("should not update a todo if it does not exist", async () => {
      const nonExistentTodo = { id: 999, title: "Non-existent Todo", completed: false };
      await fakeApi.updateTodo(nonExistentTodo);

      const result = await fakeApi.fetchTodos();
      console.log(result)

      expect(result).toEqual([
        { id: 1, title: 'Learn Vue.js Updated', completed: true },
        { id: 2, title: 'Apply Clean Architecture', completed: false },
        { id: 3, title: 'Learn Testing', completed: false }
      ]);
    });
  });
});
  