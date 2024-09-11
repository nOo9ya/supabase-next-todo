"use client";
import React from "react";
import useTodosController from "../hooks/useTodosController";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = ({
  sharedUserFullName = "",
  ownerUserId = "",
  isReadOnly = false,
}) => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onSearchTodos,
    onUpdateTodo,
    onCompleteTodo,
    onUnCompleteTodo,
    onDeleteTodo,
  } = useTodosController();

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
        ) : (
          <div>{loading ? "loading..." : "Empty!"}</div>
        )}
      </div>
    </>
  );
};

export default TodoContainer;
