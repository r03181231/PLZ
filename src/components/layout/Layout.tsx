import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutWrap>
      <Outlet />
    </LayoutWrap>
  );
};

export default Layout;

export const LayoutWrap = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
`;
