import { Todo } from "@/domain/models/Todo";

export class ManageTodos {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async getTodos() {
    return await this.todoRepository.fetchTodos();
  }

  async addTodo(title) {
    const newTodo = new Todo(Date.now(), title);
    await this.todoRepository.addTodo(newTodo);
    return newTodo;
  }

  async toggleCompletion(todo) {
    const updatedTodo = { ...todo, completed: !todo.completed };
    await this.todoRepository.updateTodo(updatedTodo);
    return updatedTodo;
  }
}