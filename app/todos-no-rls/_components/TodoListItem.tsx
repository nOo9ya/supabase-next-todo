"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  HiCheck,
  HiOutlineCheckCircle,
  HiOutlineCog6Tooth,
  HiOutlineTrash,
} from "react-icons/hi2";
import { IHandleTodos } from "@/types/todos/todosNoRls.types";

const TodoListItem = ({
  todo,
  onUpdated,
  onCompleted,
  onUnCompleted,
  onDeleted,
}: Omit<IHandleTodos, "todos" | "onSearch" | "onCreated">) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState(todo?.content ?? "");
  const [todoCompleted, setTodoCompleted] = useState<boolean>(
    !!todo?.completed_at,
  );
  const inputRef = useRef<HTMLInputElement>(null);

  // isEdit 가 true 로 변경될 때 input 에 포커스 주기
  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus(); // input 에 포커스 주기
    }
  }, [isEdit]); // isEdit 가 변경될 때마다 실행

  const activeEdit = () => {
    setIsEdit(true);
  };

  const editHandler = () => {
    onUpdated(todo.id, userInput);
    setIsEdit(false);
  };

  const handleBlur = () => {
    onUpdated(todo.id, userInput);
    setIsEdit(false);
  };

  const completeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      onCompleted(todo.id);
      setTodoCompleted(true);
    } else {
      onUnCompleted(todo.id);
      setTodoCompleted(false);
    }
  };

  const deleteHandler = () => {
    onDeleted(todo.id);
  };

  return (
    <li
      className={
        "flex w-full items-center gap-4 rounded-2xl bg-neutral-100 p-4 *:transition *:duration-500 *:ease-in-out dark:bg-neutral-800"
      }
    >
      <input
        type="checkbox"
        id={`todo-${todo?.id}`}
        name={`todo-${todo?.id}`}
        className={"peer/completed hidden"}
        onChange={(e) => completeHandler(e)}
        checked={todoCompleted}
      />
      <label
        htmlFor={`todo-${todo?.id}`}
        className={
          "flex min-h-5 min-w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-[var(--accent-color)] text-transparent peer-checked/completed:bg-[var(--accent-color)] peer-checked/completed:text-white dark:peer-checked/completed:text-black"
        }
      >
        <HiCheck className={"stroke-2"} />
      </label>
      {isEdit ? (
        <input
          ref={inputRef}
          className="flex-1"
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          onBlur={handleBlur}
        ></input>
      ) : (
        <p
          onClick={activeEdit}
          className={
            "flex-1 peer-checked/completed:text-neutral-500 peer-checked/completed:line-through"
          }
        >
          {userInput ?? todo?.content}
        </p>
      )}
      <div className="flex cursor-pointer flex-row items-center justify-center gap-1">
        <button
          className={"border-0 bg-transparent p-0.5 text-[var(--text-color)]"}
        >
          {isEdit ? (
            <HiOutlineCheckCircle
              size={20}
              className="rounded-full text-green-500 hover:bg-green-500 hover:text-white"
              onClick={editHandler}
            />
          ) : (
            <HiOutlineCog6Tooth
              size={20}
              onClick={activeEdit}
              className="hover:text-orange-500"
            />
          )}
        </button>
        <button
          onClick={deleteHandler}
          className={
            "border-0 bg-transparent p-0.5 text-[var(--text-color)] hover:text-red-500"
          }
        >
          <HiOutlineTrash size={18} />
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
