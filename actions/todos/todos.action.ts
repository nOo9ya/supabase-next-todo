"use server";

import {
  createServerSideClientRSC,
  createServerSideClient,
} from "@/lib/server/supabase";

export const getTodos = async () => {
  const supabase = await createServerSideClient();

  if (!supabase) {
    throw new Error("Failed to create Supabase client");
  }

  const { data, error } = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching todos:", error);
    return [];
  }

  return data;
};

// getById todo
export const getTodoById = async (userId: string) => {
  const supabase = await createServerSideClient(true);
  const { data, error } = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching todo:", error);
    return [];
  }

  return data;
};

// getTodosBySearch
export const getTodosBySearch = async (keywords: string) => {
  const supabase = await createServerSideClient();
  const { data, error } = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .like("content", `%${keywords}%`)
    .order("id", { ascending: false })
    .limit(100);

  if (error) {
    console.error("Error fetching todo:", error);
    return [];
  }

  return data;
};

// create todo
export const createTodo = async (content: string) => {
  const supabase = await createServerSideClient();
  const { data, error } = await supabase
    .from("todos_with_rls")
    .insert({
      content,
    })
    .select();

  if (error) {
    console.error("Error create todo:", error);
    return [];
  }

  return data;
};

// update todo
export const updateTodo = async (id: number, content: string) => {
  const supabase = await createServerSideClient();
  const { data, error } = await supabase
    .from("todos_with_rls")
    .update({
      content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error update todo:", error);
    return [];
  }

  return data;
};

// complete todo
export const completeTodo = async (id: number) => {
  const supabase = await createServerSideClient();
  const { data, error } = await supabase
    .from("todos_with_rls")
    .update({
      completed_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error completed todo:", error);
    return [];
  }

  return data;
};

// un complete todo
export const unCompleteTodo = async (id: number) => {
  const supabase = await createServerSideClient();
  const { data, error } = await supabase
    .from("todos_with_rls")
    .update({
      completed_at: null,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error UnCompleted todo:", error);
    return [];
  }

  return data;
};

// soft delete todo
export const softDeleteTodo = async (id: number) => {
  const supabase = await createServerSideClient();
  const { data, error } = await supabase
    .from("todos_with_rls")
    .update({
      deleted_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error delete todo:", error);
    return [];
  }

  return data;
};

// hard delete todo
// export const hardDeleteTodo = async (id: number) => {
//   const supabase = await createServerSideClient();
//   const result = await supabase
//     .from("todos_with_rls")
//     .delete()
//     .eq("id", id);

// if (error) {
//   console.error("Error delete todo:", error);
//   return [];
// }
//
// return data;
// };
