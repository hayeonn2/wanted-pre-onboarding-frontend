import { useState } from "react";

export const AddToDoForm = ({ onSubmit, onChange, todo }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        data-testid="new-todo-input"
        type="text"
        value={todo}
        onChange={onChange}
        placeholder="할일을 입력하세요"
      />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
};
