import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { AddToDoForm } from "../components/AddToDoForm";
import { createTodo, deleteTodo, fetchTodo, updateTodo } from "../api/todo";

const ToDo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = async () => {
    await createTodo(todoInput);
    getTodo();
  };

  const getTodo = async () => {
    const response = await fetchTodo();
    setTodoList(response.data);
    console.log(response.data);
  };

  const removeTodo = async (todo) => {
    await deleteTodo(todo.id);
    getTodo();
  };

  const isChecked = async (todo) => {
    await updateTodo(todo.id, todo.todo, !todo.isCompleted);
    getTodo();
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <AddToDoForm
        onSubmit={addTodo}
        todo={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
      />
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              removeTodo={removeTodo}
              getTodo={getTodo}
              isChecked={isChecked}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
