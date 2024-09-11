"use client";
import React from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodosController from "@/hooks/todos/useTodosController";
import SharedTodoList from "@/components/Containers/todos/SharedTodoList";

interface TodoContainerProps {
  ownerUserId?: string;
  sharedUserFullName?: string | undefined | null;
  isReadOnly: boolean;
}

const TodoContainer = ({
  sharedUserFullName = "",
  ownerUserId = "",
  isReadOnly = false,
}: TodoContainerProps) => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onSearchTodos,
    onUpdateTodo,
    onCompleteTodo,
    onUnCompleteTodo,
    onDeleteTodo,
  } = useTodosController(ownerUserId);

  return (
    <>
      <h1
        className={
          "mb-5 mt-28 text-center text-3xl font-extrabold text-[var(--accent-color)] md:text-4xl"
        }
      >
        {sharedUserFullName && `${sharedUserFullName} `}
        <span className="font-extralight">Todos</span>
      </h1>
      <div className={"mt-4 flex w-10/12 max-w-full flex-col md:w-8/12"}>
        {!isReadOnly && (
          <TodoForm
            onSearch={(keywords: string) => {
              onSearchTodos(keywords);
            }}
            onCreated={() => {
              onCreateEmptyTodos();
            }}
          />
        )}
        {todos?.length > 0 ? (
          isReadOnly ? (
            <SharedTodoList todos={todos} />
          ) : (
            <TodoList
              todos={todos}
              onUpdated={(id: number, content: string): any => {
                onUpdateTodo(id, content);
              }}
              onCompleted={(id: number): any => {
                onCompleteTodo(id);
              }}
              onUnCompleted={(id: number): any => {
                onUnCompleteTodo(id);
              }}
              onDeleted={(id: number): any => {
                onDeleteTodo(id);
              }}
            />
          )
        ) : (
          <div>{loading ? "loading..." : "Empty!"}</div>
        )}
      </div>
    </>
  );
};

export default TodoContainer;
