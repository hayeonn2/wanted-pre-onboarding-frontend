import { AddToDoForm } from "../components/AddToDoForm";
import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { createTodo } from "../api/todo";
import axios from "axios";
import { BASE_URL } from "../api/api";

const ToDo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = async (e) => {
    // e.preventDefault();
    // setTodoList([...todoList, todoInput]);
    // setTodoInput("");

    try {
      await createTodo({
        todo: todoInput,
      });
      await getTodo();
    } catch (err) {
      console.log(err);
    }
  };

  const token = localStorage.getItem("token");

  const getTodo = async () => {
    try {
      const result = await axios.get(`${BASE_URL}todos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodoList(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const onDelete = async (id) => {
    console.log("todo: " + id);
    try {
      const result = await axios.delete(`${BASE_URL}todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(result.data);
      await getTodo();
    } catch (err) {
      console.error(err);
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
        {todoList.map((todo, index) => (
          <li key={`${todo.id}`}>
            <TodoItem todo={todo} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
