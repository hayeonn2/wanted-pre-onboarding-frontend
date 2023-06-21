import styled from "styled-components";

const Button = styled.button`
  padding: 12px 0px;
  border: none;
  border-radius: 3px;
  background: #e9e9e9;
`;

export default function SignButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
}
