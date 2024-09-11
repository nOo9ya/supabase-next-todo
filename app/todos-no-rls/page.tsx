import { sleep } from "@/lib/utils";
import React from "react";
import TodoContainer from "./_components/TodoContainer";

export default async function Page() {
  // throw new Error("custom error");
  // await sleep(5000);

  return (
    <>
      <div className={"flex min-h-full flex-col items-center p-2.5"}>
        <TodoContainer sharedUserFullName="abc" isReadOnly={false} />
      </div>
    </>
  );
}
