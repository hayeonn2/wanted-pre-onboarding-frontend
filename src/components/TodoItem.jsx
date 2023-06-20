import { useEffect, useState, Fragment } from "react";

export default function TodoItem({ todo, onDelete, ...restProps }) {
  // const { onDelete } = { ...restProps };
  const [edited, setEdited] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  // const onEdit = (index) => {
  //   todoList[index] = newTodo;
  //   setTodoList([...todoList]);
  //   setEdited(false);
  // };

  useEffect(() => {
    console.log("todo.id: " + todo);
  });

  return (
    <Fragment {...restProps}>
      <label>
        <input type="checkbox" />
        <span>{todo.todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button" onClick={() => onDelete(todo.id)}>
        삭제
      </button>
    </Fragment>
    // <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //   }}
    // >
    //   <input
    //     data-testid="modify-input"
    //     value={newTodo}
    //     onChange={(e) => setNewTodo(e.target.value)}
    //   />
    //   <button data-testid="submit-button" type="submit">
    //     제출
    //   </button>
    //   <button
    //     data-testid="cancel-button"
    //     type="button"
    //     onClick={() => setEdited(false)}
    //   >
    //     취소
    //   </button>
    // </form>
  );
}
