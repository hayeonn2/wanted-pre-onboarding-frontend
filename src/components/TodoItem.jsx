import { useState, Fragment } from "react";
import { updateTodo } from "../api/todo";
import styled from "styled-components";

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
        <TodoInput>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => isChecked(todo)}
          />
          <TodoText>{todo.todo}</TodoText>
          <TodoButton
            data-testid="modify-button"
            onClick={() => setEdited(true)}
          >
            수정
          </TodoButton>
          <TodoButton
            data-testid="delete-button"
            onClick={() => removeTodo(todo)}
          >
            삭제
          </TodoButton>
        </TodoInput>
      ) : (
        <TodoForm
          onSubmit={() => {
            editTodo();
          }}
        >
          <UpdateInput
            data-testid="modify-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <TodoButton data-testid="submit-button" type="submit">
            제출
          </TodoButton>
          <TodoButton
            data-testid="cancel-button"
            type="button"
            onClick={() => setEdited(false)}
          >
            취소
          </TodoButton>
        </TodoForm>
      )}
    </>
  );
}

const TodoInput = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TodoText = styled.span`
  text-indent: 5px;
  flex-grow: 1;
`;

const TodoForm = styled.form`
  display: flex;
  flex-grow: row;
`;

const UpdateInput = styled.input`
  flex-grow: 1;
  border: 1px solid #ccc;
  text-indent: 3px;
`;

const TodoButton = styled.button`
  margin-left: 3px;
  padding: 3px 8px;
  border: 0;
  border-radius: 3px;
  background: #e9e9e9;
`;
