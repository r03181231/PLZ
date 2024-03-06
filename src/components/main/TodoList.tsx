import TodoContainer from "./TodoContainer";

const TodoList = () => {
  return (
    <>
      <TodoContainer isActive={false} />
      <TodoContainer isActive={true} />
    </>
  );
};

export default TodoList;
