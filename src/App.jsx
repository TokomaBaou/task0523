import "./styles.css";
import { Input } from "./Input";
import React, { ChangeEvent, useState } from "react";

// type InputText = {
//   text: string;
// };

export const App = () => {
  //入力した値をstateで持つ
  const [todoText, setTodoText] = useState("");
  //未完了に追加する配列を作る
  const [incompTodo, setIncompTodo] = useState([]);

  const onChangeTodo = (e) => setTodoText(e.target.value);
  return (
    <div className="App">
      <Input todoText={todoText} onChange={onChangeTodo} />
    </div>
  );
};
