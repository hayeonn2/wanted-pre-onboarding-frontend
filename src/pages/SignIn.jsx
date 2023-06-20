import { useState } from "react";
import { signIn } from "../api/auth";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signIn(email, password);
      if (response.status === 200) {
        const token = response.data.access_token;
        window.localStorage.setItem("token", token);
        navigate(0);
      }
    } catch {
      alert("입력된 정보가 존재하지 않습니다.");
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
        data-testid="signin-button"
        disabled={!(validEmail && validPassword)}
        type="submit"
      >
        로그인
      </button>
    </form>
  );
};

export default SignIn;
