import axios from "axios";
import { BASE_URL } from "./api";

const api = axios.create({
  baseURL: BASE_URL,
  Headers: {
    "Content-Type": "application/json",
  },
});

export const signUp = async (email, password) => {
  try {
    const response = await api.post("/auth/signup", {
      email,
      password,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await api.post("/auth/signin", {
      email,
      password,
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
