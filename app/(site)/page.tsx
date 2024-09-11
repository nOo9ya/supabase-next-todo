import { sleep } from "@/lib/utils";
import React from "react";

import { getUser } from "@/actions/auth/user.action";
import { PuffLoader } from "react-spinners";
import TodoContainer from "@/components/Containers/todos/TodoContainer";

export default async function Page() {
  // throw new Error("custom error");
  // await sleep(5000);
  const user = await getUser({ serverComponent: true });
  // console.log(user);

  return (
    <>
      <div className={"flex min-h-full flex-col items-center p-2.5"}>
        {user ? (
          <TodoContainer
            ownerUserId={user?.id}
            sharedUserFullName={user?.user_metadata?.user_name}
            isReadOnly={false}
          />
        ) : (
          <div className="flex h-[90vh] w-full flex-col items-center justify-center">
            <PuffLoader color="rgb(0, 255, 196)" />
            <div className="my-4 font-thin tracking-widest">
              PLEASE LOGIN FIRST
            </div>
          </div>
        )}
      </div>
    </>
  );
}
