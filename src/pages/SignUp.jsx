import { useState } from "react";
import { signUp } from "../api/auth";
import { useNavigate } from "react-router";
import SignForm from "../components/SignForm";
import SignInput from "../components/SignInput";
import SignButton from "../components/SignButton";

const SignUp = () => {
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

    const response = await signUp(email, password);
    if (response.status === 201) {
      navigate("/signin");
    }
  };

  return (
    <SignForm onSubmit={onSubmit}>
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
        data-testid="signup-button"
        disabled={!(validEmail && validPassword)}
      >
        회원가입
      </SignButton>
    </SignForm>
  );
};

export default SignUp;
