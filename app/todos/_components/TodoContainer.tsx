"use client";
import { getTodoById, getTodos } from "@/apis/todos_no_rls";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = ({
  sharedUserFullName = "",
  ownerUserId = "",
  isReadOnly = false,
  onCreated = () => {},
  onUpdated = (id, content) => {},
  onDeleted = (id) => {},
  onSearch = (keywords) => {},
}) => {
  const { loading, todos } = useTodosController();

  console.log(">>loading", loading);
  console.log(">>todos", todos);

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
        {!isReadOnly && <TodoForm />}
        {todos?.length > 0 ? (
          <TodoList
            todos={todos}
            onCreated={onCreated}
            onUpdated={onUpdated}
            onDeleted={onDeleted}
            onSearch={onSearch}
          />
        ) : (
          <div>{loading ? "loading..." : "Empty!"}</div>
        )}
      </div>
    </>
  );
};

export default TodoContainer;
