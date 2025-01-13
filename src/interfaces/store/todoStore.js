import { defineStore } from "pinia";
import { ManageTodos } from "@/application/usecases/ManageTodos";
import { TodoRepository } from "@/infrastructure/repositories/TodoRepository";

const todoRepository = new TodoRepository();
const manageTodos = new ManageTodos(todoRepository);

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  actions: {
    async fetchTodos() {
      this.todos = await manageTodos.getTodos();
    },
    async addTodo(title) {
      const newTodo = await manageTodos.addTodo(title);
      this.todos.push(newTodo);
    },
    async toggleTodoCompletion(todo) {
      const updatedTodo = await manageTodos.toggleCompletion(todo);
      const index = this.todos.findIndex((t) => t.id === todo.id);
      if (index !== -1) this.todos[index] = updatedTodo;
    },
  },
});
