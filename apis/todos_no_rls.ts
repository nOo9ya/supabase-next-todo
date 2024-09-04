"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";

// get todosList
export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    throw new Error("Failed to create Supabase client");
  }

  const { data, error } = await supabase
    .from("todos_no_rls")
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
export const getTodoById = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);

  if (error) {
    console.error("Error fetching todo:", error);
    return [];
  }

  return data;
};

// getTodosBySearch
export const getTodosBySearch = async (keywords: string) => {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .like("content", `${keywords}$`)
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
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("todos_no_rls")
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
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("todos_no_rls")
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

// soft delete todo
export const softDeleteTodo = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("todos_no_rls")
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
//   const supabase = createSupabaseBrowserClient();
//   const { data, error } = await supabase
//     .from("todos_no_rls")
//     .delete()
//     .eq("id", id);

//   if (error) {
//     console.error("Error delete todo:", error);
//     return [];
//   }

//   return data;
// };
