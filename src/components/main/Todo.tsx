import { formatDate } from "../common/FormatDate";
import { TTodo } from "./FormTodo";

interface Item {
  todoItem: TTodo;
}

const Todo = ({ todoItem }: Item) => {
  //   console.log(todoItem); {id : , title: , comment}
  const { id, title, comment, deadLine, isDone } = todoItem;

  //삭제 버튼
  const onDelete = (clickId: string) => {
    // 삭제 유효성
    if (window.confirm("삭제하시겠습니까?") === true) {
      alert("삭제되었습니다.");
    } else {
      alert("삭제를 취소하셨습니다.");
      return;
    }
  };
  //완료 버튼
  const onComplete = (clickId: string) => {};

  return (
    <div>
      <div>
        <h4>{title}</h4>
        <p>{comment}</p>
        <p>{formatDate(deadLine)}까지</p>
        <div>
          <button onClick={() => onComplete(id)}>{isDone ? "취소" : "완료"}</button>
          <button onClick={() => onDelete(id)}>삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
