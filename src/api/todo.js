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

export const createTodo = async ({ todo, todoList }) => {
  await api
    .post("/todos", {
      id: todoList.findIndex((item) => item === todo),
      todo: todo,
      isComplete: false,
      userId: token,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
