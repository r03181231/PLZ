import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TodoList from "@/components/main/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
