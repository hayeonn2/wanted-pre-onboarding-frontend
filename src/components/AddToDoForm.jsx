export const AddToDoForm = ({ onSubmit, todo, onChange }) => {
  return (
    <form onSubmit={() => onSubmit(todo)}>
      <input
        data-testid="new-todo-input"
        type="text"
        value={todo}
        onChange={onChange}
        placeholder="할일을 입력하세요"
      />
      <button data-testid="new-todo-add-button" type="button">
        추가
      </button>
    </form>
  );
};
