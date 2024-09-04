import React from "react";
import { HiMiniPlus } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const TodoForm = () => {
  return (
    <>
      <form action="" className={""}>
        <div className={"relative flex flex-col items-center md:flex-row"}>
          <input
            type="text"
            id="todo-input"
            className={
              "w-full rounded-full border border-neutral-500 bg-transparent px-5 py-3 text-[var(--text-color)] caret-[var(--accent-color)] focus:outline-0 dark:text-[var(--text-color)]"
            }
            placeholder={"write anything .."}
            autoComplete={"off"}
          />
          <button
            id="add-button"
            className={
              "absolute right-0 top-0 mt-0 h-full w-auto rounded-r-full bg-[var(--accent-color)] px-5 py-0 font-bold text-[var(--btn-text-color)]"
            }
          >
            <IoSearchOutline size={24} />
          </button>
        </div>
        <button
          id="add-button"
          className={
            "mt-4 flex h-full w-full items-center justify-center gap-2 rounded-full bg-[var(--accent-color)] p-3 px-8 font-bold text-[var(--btn-text-color)]"
          }
        >
          <HiMiniPlus size={20} />
          ADD Todo
        </button>
      </form>
    </>
  );
};

export default TodoForm;
