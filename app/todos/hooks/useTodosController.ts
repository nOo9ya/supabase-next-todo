"use client";
import {
  createTodo,
  getTodos,
  getTodosBySearch,
  softDeleteTodo,
  updateTodo,
} from "@/apis/todos_no_rls";
import { Database } from "@/types/supabase.types";
import { useState, useEffect } from "react";

type TodoDto = Database["public"]["Tables"]["todos_no_rls"]["Row"];

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
    await createTodo("");
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
    onDeleteTodo,
  };
};

export default useTodosController;
