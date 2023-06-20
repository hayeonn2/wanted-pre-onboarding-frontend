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

export const createTodo = async (newTodo) => {
  await api
    .post("/todos", {
      todo: newTodo,
      isCompleted: false,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateTodo = async (todoId, newTodo, todoIsCompleted) => {
  await api
    .put(`/todos/${todoId}`, {
      todo: newTodo,
      isCompleted: todoIsCompleted,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
