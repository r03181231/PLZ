import { TTodo } from "@/components/main/FormTodo";
import axios from "axios";

const serverUrl = import.meta.env.VITE_API_URL;

export const getJson = async () => {
  const { data } = await axios.get(`${serverUrl}/todos`);

  return data;
};

export const postJson = async (newTodo: TTodo) => {
  await axios.post(`${serverUrl}/todos`, newTodo);
};

export const deleteJson = async (id: string) => {
  await axios.delete(`${serverUrl}/todos/${id}`);
};

export const changeJson = async (changeTodo: Pick<TTodo, "id" | "isDone">) => {
  const { id, isDone } = changeTodo;
  await axios.patch(`${serverUrl}/todos/${id}`, { isDone });
};
