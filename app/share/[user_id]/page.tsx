import React from "react";

import { getProfileById } from "@/actions/auth/user.action";
import { permanentRedirect } from "next/navigation";
import TodoContainer from "@/components/Containers/todos/TodoContainer";

// http://localhost:3000/share/d46a72d6-d732-4850-b139-35b843a5c6ae
interface sharePageProps {
  params: { user_id: string };
  searchParams: {};
}

export default async function Page(props: sharePageProps) {
  const userId = props?.params?.user_id;
  const profile = await getProfileById({ serverComponent: true, userId });

  if (!profile) {
    permanentRedirect("/");
  }

  return (
    <>
      <div className={"flex min-h-full flex-col items-center p-2.5"}>
        <TodoContainer
          ownerUserId={profile?.id}
          sharedUserFullName={profile?.full_name}
          isReadOnly={true}
        />
      </div>
    </>
  );
}
function permanmentRedirect(arg0: string) {
  throw new Error("Function not implemented.");
}
