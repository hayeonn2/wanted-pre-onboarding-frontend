import { useState } from "react";

export default function TodoItem({ index, todo, todoList, setTodoList }) {
  const [edited, setEdited] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const onEdit = (index) => {
    todoList[index] = newTodo;
    setTodoList([...todoList]);
    setEdited(false);
  };

  const onDelete = (index) => {
    setTodoList((list) => {
      return list.filter((_, i) => i !== index);
    });
  };
  return (
    <li>
      {!edited ? (
        <>
          <label>
            <input type="checkbox" />
            <span>{todo}</span>
          </label>
          <button data-testid="modify-button" onClick={() => setEdited(true)}>
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => {
              onDelete(index);
            }}
          >
            삭제
          </button>
        </>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onEdit(index);
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
    </li>
  );
}
