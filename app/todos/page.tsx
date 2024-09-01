import React from "react";
import { HiCheck, HiOutlineTrash } from "react-icons/hi2";

export default function Page() {
  return (
    <div className="min-h-full p-2.5 flex flex-col items-center">
      <h1
        className={"mt-28 mb-5 text-[rgb(0,255,196)] text-[3em] md:text-[5rem] font-extrabold uppercase text-center"}>Todo
        App</h1>
      <div className={"flex flex-col mt-4 w-10/12 md:w-8/12 max-w-full"}>
        <form action=""
              className={"relative flex flex-col md:flex-row items-center justify-between"}>
          <input type="text" id="todo-input"
                 className={"py-3 px-5 w-full border rounded-full border-neutral-500 text-white caret-[rgb(0,255,196)] bg-transparent focus:outline-0"}
                 placeholder={"write anything .."}
                 autoComplete={"off"} />
          <button id="add-button"
                  className={"w-full mt-4 p-2 rounded-full md:absolute md:top-0 md:right-0 md:rounded-r-full md:w-auto md:mt-0 md:py-0 bg-[rgb(0,255,196)] text-black font-bold h-full px-8"}>ADD
          </button>
        </form>
        <ul id="todoList" className={"flex gap-4 mt-6"}>
          <li
            className={"w-full flex items-center gap-4 p-4 rounded-2xl bg-neutral-800 *:transition *:duration-500 *:ease-in-out "}>
            <input type="checkbox"
                   name="todo-1" id="todo-1"
                   className={"peer/completed hidden"}
            />
            <label htmlFor="todo-1"
                   className={"border-2 border-[rgb(0,255,196)] min-h-5 min-w-5 flex items-center justify-center shrink-0 rounded-full peer-checked/completed:bg-[rgb(0,255,196)]"}>
              <HiCheck className={"fill-black"} />
            </label>
            <label htmlFor="todo-1"
                   className={"flex-grow peer-checked/completed:line-through peer-checked/completed:text-neutral-500"}>
              webdev project with html, css and js
            </label>
            <button
              className={"p-0.5 bg-transparent border-0 flex items-center justify-center cursor-pointer"}>
              <HiOutlineTrash className={"hover:stroke-red-500"} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
