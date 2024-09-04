import React, { Fragment } from "react";
import TodoListItem from "./TodoListItem";
import { Database } from "@/types/supabase.types";

type TodoDto = Database["public"]["Tables"]["todos_no_rls"]["Row"];

const TodoList = ({
  todos,
  onUpdated = (id: number, content: string) => {},
  onDeleted = (id: number) => {},
}: {
  todos: TodoDto[];
}) => {
  return (
    <Fragment>
      <ul id="todoList" className={"mt-6 flex flex-col gap-4"}>
        {todos.map((todo: TodoDto) => {
          return (
            <TodoListItem
              key={todo?.id}
              todo={todo}
              onUpdated={onUpdated}
              onDeleted={onDeleted}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default TodoList;
