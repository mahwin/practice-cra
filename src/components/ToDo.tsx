import { IToDo } from "./atom";

function ToDo({ text, category, id }: IToDo) {
  return (
    <li>
      {text}
      <button>To Do</button>
      <button>Done</button>
      <button>Doing</button>
    </li>
  );
}

export default ToDo;
