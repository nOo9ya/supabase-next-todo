import React from "react";
import TodoListItem from "./TodoListItem";

import { IHandleTodos, TodoDto } from "@/types/todos/todosNoRls.types";

const TodoList = ({
  todos = [],
  onUpdated,
  onCompleted,
  onUnCompleted,
  onDeleted,
}: Omit<IHandleTodos, "todo" | "onSearch" | "onCreated">) => {
  return (
    <>
      <ul id="todoList" className={"mt-6 flex flex-col gap-4"}>
        {todos.map((todo: TodoDto) => {
          return (
            <TodoListItem
              key={todo?.id}
              todo={todo}
              onUpdated={onUpdated}
              onCompleted={onCompleted}
              onUnCompleted={onUnCompleted}
              onDeleted={onDeleted}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
