import axios from "axios";
import { BASE_URL } from "./api";

const api = axios.create({
  baseURL: BASE_URL,
  Headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const createTodo = async (todo) => {
  await api.post("/todo", todo).then((res) => {
    console.log(res);
  });
};
