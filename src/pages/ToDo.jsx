import { AddToDoForm } from "../components/AddToDoForm";
import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
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
    console.log(response);
  };

  const onDelete = async (id) => {
    await deleteTodo(id);
    getTodo();
  };

  const isChecked = async (todo) => {
    try {
      await updateTodo(todo.id, todo.todo, !todo.isCompleted);
      getTodo();
    } catch (err) {
      console.log(err);
    }
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
              onDelete={onDelete}
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
