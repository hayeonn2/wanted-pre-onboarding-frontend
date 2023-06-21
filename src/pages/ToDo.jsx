import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { AddToDoForm } from "../components/AddToDoForm";
import { createTodo, deleteTodo, fetchTodo, updateTodo } from "../api/todo";
import styled from "styled-components";

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
    <TodoList>
      <TodoHeader>TODO LIST</TodoHeader>
      <AddToDoForm
        onSubmit={addTodo}
        todo={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
      />
      <UL>
        {todoList.map((todo) => (
          <List key={todo.id}>
            <TodoItem
              todo={todo}
              removeTodo={removeTodo}
              getTodo={getTodo}
              isChecked={isChecked}
            />
          </List>
        ))}
      </UL>
    </TodoList>
  );
};
const TodoHeader = styled.div`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
`;
const TodoList = styled.div`
  padding: 30px 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 400px;
  margin: 0 auto;
`;

const UL = styled.ul`
  list-style: none;
  width: 280px;
  margin: 10px auto;
  padding: 0;
`;

const List = styled.li`
  margin-bottom: 6px;
  margin-left: -2px;
  padding: 6px 0;
`;

export default ToDo;
