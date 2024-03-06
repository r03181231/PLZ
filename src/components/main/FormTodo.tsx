import useInput from "@/hooks/useInput";
import { useEffect, useRef } from "react";
import * as FT from "@styles/todoFormSection.Style";

interface Todo {
  id: string;
  title: string;
  comment: string;
  isDone: boolean;
  deadLine: string;
}

const FormTodo = () => {
  //   const add: string = "추가";
  const init: Todo = {
    id: crypto.randomUUID(),
    title: "",
    comment: "",
    isDone: true,
    deadLine: new Date().toISOString().split("T", 1)[0],
  };

  const [todoInput, setTodoInput, onChange, reset] = useInput(init);
  const refTitle = useRef<HTMLInputElement>(null);
  const titleInput = todoInput.title;
  const commentInput = todoInput.comment;
  const deadLineInput = todoInput.deadLine;
  const blankPattern = /^\s+|\s+$/g;
  useEffect(() => {
    if (refTitle.current !== null) {
      refTitle.current.focus();
    }
  }, []);

  // 들어온 값으로 교체해주기
  const onSubmitHand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const titleBlank = titleInput.replace(blankPattern, "");
    const commentBlank = commentInput.replace(blankPattern, "");

    // 공백이면 아무 것도 리턴하지 않게 해줘.
    if (titleBlank === "" && commentBlank === "") {
      alert("빈칸을 전부 채워주세요.");
      return;
    }
    if (titleBlank === "" || commentBlank === "") {
      alert("빈칸을 전부 채워주세요.");
      return;
    }
    // setTodoInputs((prevTodos: any) => [{ ...todoInput }, ...prevTodos]);
    setTodoInput(init);
    reset();
    refTitle.current?.focus();
  };

  return (
    <FT.TodoFormSection>
      <form onSubmit={onSubmitHand} className="form-wrap">
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          name="title"
          value={titleInput}
          onChange={onChange}
          ref={refTitle}
          autoFocus
        />
        <label htmlFor="comment">내용</label>
        <input id="comment" type="text" name="comment" value={commentInput} onChange={onChange} />
        <label htmlFor="deadLine">마감일</label>
        <input
          id="deadLine"
          type="date"
          name="deadLine"
          min="1800-01-01"
          max="2200-12-31"
          value={deadLineInput}
          onChange={onChange}
        />
        <button>추가</button>
      </form>
    </FT.TodoFormSection>
  );
};

export default FormTodo;
