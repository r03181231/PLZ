import { TTodo } from "@/components/main/FormTodo";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosDatas: [] as TTodo[],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      const newTodo = action.payload;
      state.todosDatas = [newTodo, ...state.todosDatas];
    },
  },
});
export const { setTodos } = todoSlice.actions;
export default todoSlice.reducer;
