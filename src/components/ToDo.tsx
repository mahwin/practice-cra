import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atom";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      {text}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
    </li>
  );
}

export default ToDo;

let [num1, num2] = [8, 33];
const x1 = Math.floor(num1 / 4);
const y1 = num1 % 4 === 0 ? 4 : num1 % 4;
const x2 = Math.floor(num2 / 4);
const y2 = num2 % 4 === 0 ? 4 : num2 % 4;
console.log(Math.abs(x1 - x2) + Math.abs(y1 - y2));
