import { AddToDoForm } from "../components/AddToDoForm";
import { useState } from "react";
import TodoItem from "../components/TodoItem";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
    console.log("Add todo: " + todo);
    console.log("todoId: " + todo.id);
  };
  return (
    <div>
      <div>TODO</div>
      <AddToDoForm
        onSubmit={addTodo}
        todo={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <ul>
        {todoList.map((todo, id) => (
          <TodoItem key={id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
