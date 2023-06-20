import { useEffect, useState, Fragment } from "react";
import { updateTodo } from "../api/todo";

export default function TodoItem({ todo, onDelete, getTodo, ...restProps }) {
  // const { onDelete } = { ...restProps };
  const [edited, setEdited] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);

  const editTodo = async () => {
    try {
      await updateTodo(todo.id, newTodo, todo.isCompleted);
      await getTodo();
      setEdited(false);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   console.log("todo.id: " + todo);
  // });

  return (
    <Fragment>
      {!edited ? (
        <label>
          <input type="checkbox" />
          <span>{todo.todo}</span>
          <button data-testid="modify-button" onClick={() => setEdited(true)}>
            수정
          </button>
          <button data-testid="delete-button" onClick={() => onDelete(todo.id)}>
            삭제
          </button>
        </label>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
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
    </Fragment>
  );
}
