import { Database } from "@/types/supabase.types";

export type TodoDto = Database["public"]["Tables"]["todos_with_rls"]["Row"];

export interface IHandleTodos {
  todos: TodoDto[];
  todo: TodoDto;
  onSearch?: (keywords: string) => void | string;
  onCreated?: () => {} | void;
  onUpdated: (id: number, content: string) => {};
  onCompleted: (id: number) => {};
  onUnCompleted: (id: number) => {};
  onDeleted: (id: number) => {};
}
