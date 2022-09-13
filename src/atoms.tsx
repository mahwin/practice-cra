import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    TO_DO: ["a", "b"],
    DOING: ["c", "d"],
    DONE: ["e", "f"],
  },
});
