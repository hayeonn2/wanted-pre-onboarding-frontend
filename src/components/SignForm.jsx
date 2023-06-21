import styled from "styled-components";

const Form = styled.form`
  width: 300px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export default function SignForm({ children, ...restProps }) {
  return <Form>{children}</Form>;
}
