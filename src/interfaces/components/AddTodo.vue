<template>
  <form @submit.prevent="addNewTodo">
    <input v-model="newTodo" placeholder="Add a new todo" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { useTodoStore } from "@/interfaces/store/todoStore";
import { ref } from "vue";

export default {
  setup() {
    const newTodo = ref("");
    const todoStore = useTodoStore();

    const addNewTodo = async () => {
      if (newTodo.value.trim()) {
        await todoStore.addTodo(newTodo.value.trim());
        newTodo.value = "";
      }
    };

    return { newTodo, addNewTodo };
  },
};
</script>
