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

export const createTodo = async ({ todo }) => {
  await api
    .post("/todos", {
      todo: todo,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
