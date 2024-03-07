import CurrTime from "@/util/currTime";
import styled from "styled-components";

const Header = () => {
  return (
    <TodoListHeader>
      <LogoNdTitle>
        <LogoH2>logo</LogoH2>
        <div>
          <CurrTime />
          <h1>todolistTitle</h1>
        </div>
      </LogoNdTitle>
    </TodoListHeader>
  );
};

export default Header;

export const TodoListHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  border: 1px solid lightblue;
`;

export const LogoNdTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 1.4rem;
`;

export const LogoH2 = styled.h2``;
