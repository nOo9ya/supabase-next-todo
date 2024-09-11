import { IHandleTodos } from "@/types/todos/todosNoRls.types";

const SharedTodoListItem = ({ todo }: Pick<IHandleTodos, "todo">) => {
  return (
    <li
      className={
        "flex w-full items-center gap-4 rounded-2xl bg-neutral-100 p-4 *:transition *:duration-500 *:ease-in-out dark:bg-neutral-800"
      }
    >
      <p
        className={
          "flex-1 peer-checked/completed:text-neutral-500 peer-checked/completed:line-through"
        }
      >
        {todo?.content}
      </p>
    </li>
  );
};

export default SharedTodoListItem;
