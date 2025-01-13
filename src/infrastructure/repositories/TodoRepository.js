import { fakeApi } from "@/infrastructure/api/fakeApi";

export class TodoRepository {
  async fetchTodos() {
    return await fakeApi.fetchTodos();
  }

  async addTodo(todo) {
    return await fakeApi.addTodo(todo);
  }

  async updateTodo(todo) {
    return await fakeApi.updateTodo(todo);
  }
}
