import useSetMutation from "@/hooks/useSetMutation";
import { formatDate } from "../common/FormatDate";
import { TTodo } from "./FormTodo";
import { changeJson, deleteJson } from "@/api/jsonApi";

interface Item {
  todoItem: TTodo;
}

const Todo = ({ todoItem }: Item) => {
  const [deleteMutation] = useSetMutation(deleteJson, "formTodo");
  const [changeMutation] = useSetMutation(changeJson, "formTodo");
  const { id, title, comment, deadLine, isDone } = todoItem;

  //삭제 버튼
  const onDelete = async () => {
    // 삭제 유효성
    if (window.confirm("삭제하시겠습니까?") === true) {
      await deleteMutation.mutateAsync(id);
      alert("삭제되었습니다.");
    } else {
      alert("삭제를 취소하셨습니다.");
      return;
    }
  };

  //완료 버튼
  const onComplete = () => {
    const changeStateTodo = {
      id,
      isDone: !isDone,
    };
    changeMutation.mutate(changeStateTodo);
  };

  return (
    <div>
      <div>
        <h4>{title}</h4>
        <p>{comment}</p>
        <p>{formatDate(deadLine)}까지</p>
        <div>
          <button onClick={onComplete}>{isDone ? "취소" : "완료"}</button>
          <button onClick={onDelete}>삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
