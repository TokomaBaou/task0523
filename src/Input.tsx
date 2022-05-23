import React, { useState } from "react";

export const Input: React.FC = (props) => {
  const { todoText, onChange } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="ここに入力"
        value={todoText}
        onChange={onChange}
      />
      <button>追加</button>
    </div>
  );
};
