import axios from "axios";
import { BASE_URL } from "./api";

const api = axios.create({
  baseURL: BASE_URL,
  Headers: {
    "Content-Type": "application/json",
  },
});

export const signUp = async (user) => {
  await api
    .post("/auth/signup", user)
    .then((res) => {
      console.log(res);
      window.location.replace("/signin");
    })
    .catch((err) => {
      console.log(err);
      alert(err.res?.data?.message);
    });
};

export const signIn = async (user) => {
  await api
    .post("/auth/signin", user)
    .then((res) => {
      console.log(res);
      const token = res.data.access_token;
      localStorage.clear();
      localStorage.setItem("token", token);
      window.location.replace("/todo");
    })
    .catch((err) => {
      console.log(err);
      alert(err.res?.data?.message);
    });
};
