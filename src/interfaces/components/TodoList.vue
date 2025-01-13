<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <label>
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleCompletion(todo)"
        />
        {{ todo.title }}
      </label>
    </li>
  </ul>
</template>

<script>
import { useTodoStore } from "@/interfaces/store/todoStore";
import { computed } from "vue";

export default {
  setup() {
    const todoStore = useTodoStore();
    const todos = computed(() => todoStore.todos);

    const toggleCompletion = (todo) => {
      todoStore.toggleTodoCompletion(todo);
    };

    return { todos, toggleCompletion };
  },
};
</script>
