import { useState } from "react";
import axios from "axios";

const url = "http://localhost:8000/";
const api = axios.create({
  baseURL: url,
  Headers: {
    "Content-Type": "application/json",
  },
});

const SignIn = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidateEmail = (e) => {
    setEmail(e.target.value);

    if (e.target.value.includes("@")) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const isValidatePassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length >= 8) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  const register = async () => {
    await api
      .post("/auth/signin", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        const token = res.data.access_token;
        localStorage.setItem("token", token);
        window.location.replace("/todo");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        data-testid="email-input"
        placeholder="이메일을 입력해주세요"
        onChange={isValidateEmail}
        value={email}
      />

      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        data-testid="password-input"
        placeholder="비밀번호를 입력해주세요"
        onChange={isValidatePassword}
        value={password}
      />

      <button
        type="submit"
        data-testid="signin-button"
        disabled={!(validEmail && validPassword)}
        onClick={register}
      >
        로그인
      </button>
    </div>
  );
};

export default SignIn;
