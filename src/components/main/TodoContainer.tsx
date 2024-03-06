import { useQuery } from "react-query";
import { TTodo } from "./FormTodo";
import { getJson } from "@/api/jsonApi";
import Todo from "./Todo";

interface TodoProps {
  isActive: boolean;
}

const TodoContainer = ({ isActive }: TodoProps) => {
  const {
    isLoading: formTodoLoading,
    data: formTodoData,
    isError: formTodoError,
  } = useQuery("formTodo", getJson, { refetchOnWindowFocus: false });

  const filterFormTodo = formTodoData
    ? formTodoData.filter((todoItem: TTodo) => todoItem.isDone === isActive)
    : [];

  if (formTodoLoading) {
    return <div>로딩중입니다...</div>;
  }

  if (formTodoError) {
    return <div>정보를 불러오지 못하고 있습니다...</div>;
  }

  const title = isActive ? "✅Done" : "🔥Working";

  return (
    <section>
      <div>{title}</div>
      <article>
        {filterFormTodo.map((todoItem: TTodo) => {
          return <Todo key={todoItem.id} todoItem={todoItem} />;
        })}
      </article>
    </section>
  );
};

export default TodoContainer;
