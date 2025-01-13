<template>
  <div>
    <h1>Todo App</h1>
    <AddTodo />
    <TodoList />
  </div>
</template>

<script>
import AddTodo from "@/interfaces/components/AddTodo.vue";
import TodoList from "@/interfaces/components/TodoList.vue";
import { useTodoStore } from "@/interfaces/store/todoStore";

export default {
  components: { AddTodo, TodoList },
  setup() {
    const todoStore = useTodoStore();
    todoStore.fetchTodos();
  },
};
</script>
