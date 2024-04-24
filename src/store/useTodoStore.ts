import { create } from "zustand";
import { TodoStore } from "@/types/todoTypes";

// export const 투두저장소 = create<투두들의타입>((set) => ({
//     투두 : '',
//     투두리스트 : [''],
//     set투두 : (투두) => set({투두}),
//     set투두리스트 :
// }))

export const useTodoStore = create<TodoStore>((set) => ({
  selectedClient: { id: "", title: "", content: "" },
  setSelectedClient: (client) => set({ selectedClient: client }),
}));
