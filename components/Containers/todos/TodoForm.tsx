"use client";

import React, { useState } from "react";
import { HiMiniPlus } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IHandleTodos } from "@/types/todos/todosNoRls.types";

const TodoForm = ({
  onSearch,
  onCreated,
}: Pick<IHandleTodos, "onSearch" | "onCreated">) => {
  const [userSearchInput, setUserSearchInput] = useState("");
  const searchEndHandler = () => {
    onSearch?.(userSearchInput);
    // setUserSearchInput("");
  };

  return (
    <>
      <div className={"relative flex flex-col items-center md:flex-row"}>
        <input
          type="text"
          id="todo-input"
          className={
            "w-full rounded-full border border-neutral-500 bg-transparent px-5 py-3 text-[var(--text-color)] caret-[var(--accent-color)] focus:outline-0 dark:text-[var(--text-color)]"
          }
          placeholder={"write anything .."}
          autoComplete={"off"}
          value={userSearchInput}
          onChange={(e) => setUserSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchEndHandler();
            }
          }}
        />
        <button
          id="add-button"
          className={
            "absolute right-0 top-0 mt-0 h-full w-auto rounded-r-full bg-[var(--accent-color)] px-5 py-0 font-bold text-[var(--btn-text-color)]"
          }
          onClick={searchEndHandler}
        >
          <IoSearchOutline size={24} />
        </button>
      </div>
      <button
        id="add-button"
        className={
          "mt-4 flex h-full w-full items-center justify-center gap-2 rounded-full bg-[var(--accent-color)] p-3 px-8 font-bold text-[var(--btn-text-color)]"
        }
        onClick={onCreated}
      >
        <HiMiniPlus size={20} />
        ADD Todo
      </button>
    </>
  );
};

export default TodoForm;
