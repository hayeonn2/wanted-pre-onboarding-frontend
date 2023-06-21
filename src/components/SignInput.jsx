import styled from "styled-components";

const Input = styled.input`
  margin: 5px 0 20px 0;
  padding: 10px 8px;
`;

export default function SignInput({ ...restProps }) {
  return <Input {...restProps} />;
}
