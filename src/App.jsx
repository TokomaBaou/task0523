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

  //変更したときstateを変更する関数
  const onChangeTodo = (e) => setTodoText(e.target.value);
  //追加ボタンを押したとき未完了の配列にセットする関数
  const onChlickAdd = () => {
    if (todoText === "") return;
    const setNewTodo = [...incompTodo, todoText];
    setIncompTodo(setNewTodo);
    setTodoText("");
  };

  return (
    <div className="App">
      <Input
        todoText={todoText}
        onChange={onChangeTodo}
        onClick={onChlickAdd}
      />
    </div>
  );
};
