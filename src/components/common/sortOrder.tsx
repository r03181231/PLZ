import { ChangeEvent, useState } from "react";

interface Todos {
  id: string;
  todo: string;
  deadLine: string;
}

interface SortOrderProps {
  inputValue: Todos[];
  setInputValue: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const sortOrder = ({ inputValue, setInputValue }: SortOrderProps) => {
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const sortOrderChange = () => {
    const orderDeadLine = [...inputValue].sort((a, b) => {
      if (sort === "asc") {
        return new Date(a.deadLine).getTime() - new Date(b.deadLine).getTime();
      } else {
        return new Date(b.deadLine).getTime() - new Date(a.deadLine).getTime();
      }
    });
    setInputValue(orderDeadLine);
  };

  const onSortValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as "asc" | "desc");
    sortOrderChange();
  };
  return (
    <section>
      <div className="sort-wrap">
        <select name="sort" value={sort} onChange={onSortValue}>
          <option value="asc">먼일순</option>
          <option value="desc">가까운일순</option>
        </select>
      </div>
    </section>
  );
};

export default sortOrder;
