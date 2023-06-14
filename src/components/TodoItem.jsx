import { useState } from "react";

export default function TodoItem({ index, todo, todoList, setTodoList }) {
  const onDelete = (index) => {
    setTodoList((list) => {
      return list.filter((_, i) => i !== index);
    });
    //setTodoList(todoList.filter((item) => item.index !== index));
  };
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button
        data-testid="delete-button"
        onClick={() => {
          onDelete(index);
        }}
      >
        삭제
      </button>
    </li>
  );
}
