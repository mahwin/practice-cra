import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    console.log("toDos", toDos);
    console.log("category", category);
    console.log(toDos.filter((toDo) => toDo.category === category));
    return toDos.filter((toDo) => toDo.category === category);
  },
});
