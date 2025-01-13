export function toggleTodoCompletion(todo) {
  return { ...todo, completed: !todo.completed };
}
