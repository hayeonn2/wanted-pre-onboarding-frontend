import { useState } from "react";
import { signIn } from "../api/auth";
import { useNavigate } from "react-router";
import SignTitle from "../components/SignTitle";
import SignForm from "../components/SignForm";
import SignInput from "../components/SignInput";
import SignButton from "../components/SignButton";

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
        navigate(0);
        const token = response.data.access_token;
        window.localStorage.setItem("token", token);
      }
    } catch {
      alert("입력된 정보가 존재하지 않습니다.");
    }
  };

  return (
    <SignForm onSubmit={onSubmit}>
      <SignTitle>로그인</SignTitle>
      <label htmlFor="email">이메일</label>
      <SignInput
        type="email"
        id="email"
        data-testid="email-input"
        placeholder="이메일을 입력해주세요"
        onChange={isValidateEmail}
        value={email}
      />

      <label htmlFor="password">비밀번호</label>
      <SignInput
        type="password"
        id="password"
        data-testid="password-input"
        placeholder="비밀번호를 입력해주세요"
        onChange={isValidatePassword}
        value={password}
      />

      <SignButton
        data-testid="signin-button"
        disabled={!(validEmail && validPassword)}
        type="submit"
      >
        로그인
      </SignButton>
    </SignForm>
  );
};

export default SignIn;
