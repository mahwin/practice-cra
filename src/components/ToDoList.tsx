import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState, toDoSelector, toDoState } from "./atom";
import CreateToDo from "./CreateToDO";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  console.log(toDos);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FocusEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">TO DO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo
          key={toDo.id}
          text={toDo.text}
          id={toDo.id}
          category={category as any}
        />
      ))}
    </div>
  );
}

export default ToDoList;
