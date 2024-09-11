import React from "react";
import { TodoDto } from "@/types/todos/todosNoRls.types";
import SharedTodoListItem from "@/components/Containers/todos/SharedTodoListItem";

const SharedTodoList = ({ todos = [] }: { todos: TodoDto[] }) => {
  return (
    <>
      <ul id="todoList" className={"mt-6 flex flex-col gap-4"}>
        {todos.map((todo: TodoDto) => {
          return <SharedTodoListItem key={todo?.id} todo={todo} />;
        })}
      </ul>
    </>
  );
};

export default SharedTodoList;
