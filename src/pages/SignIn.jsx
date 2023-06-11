const SignIn = () => {
  return (
    <div>
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        data-testid="email-input"
        placeholder="이메일을 입력해주세요"
      />

      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        data-testid="password-input"
        placeholder="비밀번호를 입력해주세요"
      />

      <button data-testid="signin-button">로그인</button>
    </div>
  );
};

export default SignIn;
