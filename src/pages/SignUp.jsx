import { useState } from "react";
import { signUp } from "../api/auth";
import { useNavigate } from "react-router";

import styled from "styled-components";
import SignForm from "../components/SignForm";

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
      <Input
        type="email"
        id="email"
        data-testid="email-input"
        placeholder="이메일을 입력해주세요"
        onChange={isValidateEmail}
        value={email}
      />

      <label htmlFor="password">비밀번호</label>
      <Input
        type="password"
        id="password"
        data-testid="password-input"
        placeholder="비밀번호를 입력해주세요"
        onChange={isValidatePassword}
        value={password}
      />

      <Button
        data-testid="signup-button"
        disabled={!(validEmail && validPassword)}
      >
        회원가입
      </Button>
    </SignForm>
  );
};

const Form = styled.form`
  /* background-color: pink; */
  width: 300px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 5px 0 20px 0;
  padding: 10px 8px;
`;

const Button = styled.button`
  padding: 10px 0;
  border: none;
  border-radius: 3px;
  background: #e9e9e9;
`;

export default SignUp;
