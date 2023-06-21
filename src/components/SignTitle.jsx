import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e9e9;
`;

export default function SignTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}
