import React, { useState } from "react";

const SignUp = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const isValidateEmail = (e) => {
    if (e.target.value.includes("@")) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const isValidatePassword = (e) => {
    if (e.target.value.length >= 8) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  return (
    <div>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        data-testid="email-input"
        placeholder="이메일을 입력해주세요"
        onChange={isValidateEmail}
      />

      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        data-testid="password-input"
        placeholder="비밀번호를 입력해주세요"
        onChange={isValidatePassword}
      />

      <button
        data-testid="signup-button"
        disabled={!(validEmail && validPassword)}
      >
        회원가입
      </button>
    </div>
  );
};

export default SignUp;
