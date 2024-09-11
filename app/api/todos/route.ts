import { NextResponse } from "next/server";
import { getTodos } from "@/actions/todos/todos.action";

export const GET = async () => {
  const result = await getTodos();

  return NextResponse.json({
    ...result,
  });
};
