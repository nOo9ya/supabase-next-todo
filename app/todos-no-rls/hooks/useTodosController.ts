"use client";
import {
  completeTodo,
  createTodo,
  getTodos,
  getTodosBySearch,
  softDeleteTodo,
  unCompleteTodo,
  updateTodo,
} from "@/apis/todos_no_rls";
import { useEffect, useState } from "react";
import { type TodoDto } from "@/types/todos/todosNoRls.types";

const useTodosController = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<TodoDto[]>([]);

  const onGetTodos = async () => {
    try {
      const resultTodos = await getTodos();
      if (resultTodos) setTodos(resultTodos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onGetTodos();
  }, []);

  // 빈 todo 생성
  const onCreateEmptyTodos = async () => {
    await createTodo("New Todo");
    await onGetTodos();
  };

  // search todos
  const onSearchTodos = async (keywords: string) => {
    if (keywords) {
      const todos = await getTodosBySearch(keywords);
      if (todos) setTodos(todos);
    } else {
      await onGetTodos();
    }
  };

  // update todo
  const onUpdateTodo = async (id: number, content: string) => {
    await updateTodo(id, content);
    await onGetTodos();
  };

  // complete todo
  const onCompleteTodo = async (id: number) => {
    await completeTodo(id);
  };

  // unComplete todo
  const onUnCompleteTodo = async (id: number) => {
    await unCompleteTodo(id);
  };

  // soft delete todo
  const onDeleteTodo = async (id: number) => {
    await softDeleteTodo(id);
    await onGetTodos();
  };

  return {
    loading,
    todos,
    onCreateEmptyTodos,
    onSearchTodos,
    onUpdateTodo,
    onCompleteTodo,
    onUnCompleteTodo,
    onDeleteTodo,
  };
};

export default useTodosController;
