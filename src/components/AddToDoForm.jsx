import styled from "styled-components";

export const AddToDoForm = ({ onSubmit, todo, onChange }) => {
  return (
    <Form
      onSubmit={() => {
        onSubmit(todo);
      }}
    >
      <Input
        data-testid="new-todo-input"
        type="text"
        value={todo}
        onChange={onChange}
        placeholder="할일을 입력하세요"
      />
      <Button data-testid="new-todo-add-button" type="submit">
        추가
      </Button>
    </Form>
  );
};

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  width: 200px;
  padding: 8px 10px;
  border: 1px solid #c2c2c2;
  border-radius: 3px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 9px 12px;
  border: 0;
  border-radius: 3px;
  background: #003c9c;
  color: white;
`;
