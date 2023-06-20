import axios from "axios";
import { BASE_URL } from "./api";

const token = localStorage.getItem("token");
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const fetchTodo = async () => {
  const response = await api.get("/todos");
  return response;
};

export const createTodo = async (newTodo) => {
  const response = await api.post("/todos", {
    todo: newTodo,
    isCompleted: false,
  });
  return response;
};

export const deleteTodo = async (id) => {
  const response = await api.delete(`todos/${id}`);
  return response;
};

export const updateTodo = async (todoId, newTodo, todoIsCompleted) => {
  const response = await api.put(`/todos/${todoId}`, {
    todo: newTodo,
    isCompleted: todoIsCompleted,
  });
  return response;
};
