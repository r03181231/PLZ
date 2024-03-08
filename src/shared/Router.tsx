import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "@/components/main/TodoList";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
