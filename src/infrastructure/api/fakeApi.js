const todos = [
  { id: 1, title: "Learn Vue.js", completed: false },
  { id: 2, title: "Apply Clean Architecture", completed: false },
];

export const fakeApi = {
  fetchTodos: async () => [...todos],
  addTodo: async (todo) => todos.push(todo),
  updateTodo: async (updatedTodo) => {
    const index = todos.findIndex((t) => t.id === updatedTodo.id);
    if (index !== -1) todos[index] = updatedTodo;
  },
};
