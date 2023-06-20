import { useState, Fragment } from "react";
import { updateTodo } from "../api/todo";

export default function TodoItem({
  todo,
  removeTodo,
  getTodo,
  isChecked,
  ...restProps
}) {
  const [edited, setEdited] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);

  const editTodo = async () => {
    await updateTodo(todo.id, newTodo, todo.isCompleted);
    await getTodo();
    setEdited(false);
  };

  return (
    <>
      {!edited ? (
        <label>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => isChecked(todo)}
          />
          <span>{todo.todo}</span>
          <button data-testid="modify-button" onClick={() => setEdited(true)}>
            수정
          </button>
          <button data-testid="delete-button" onClick={() => removeTodo(todo)}>
            삭제
          </button>
        </label>
      ) : (
        <form
          onSubmit={() => {
            editTodo();
          }}
        >
          <input
            data-testid="modify-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button data-testid="submit-button" type="submit">
            제출
          </button>
          <button
            data-testid="cancel-button"
            type="button"
            onClick={() => setEdited(false)}
          >
            취소
          </button>
        </form>
      )}
    </>
  );
}
