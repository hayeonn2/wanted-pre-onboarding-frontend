import { AddToDoForm } from "../components/AddToDoForm";
import { useState } from "react";
import TodoItem from "../components/TodoItem";
import { createTodo } from "../api/todo";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = async (e) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");

    await createTodo({ todo, todoList });
    console.log("Add todo: " + todo);
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
        {todoList.map((todo, idx) => (
          <TodoItem
            key={idx}
            index={idx}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
