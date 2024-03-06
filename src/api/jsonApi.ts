import { Todo } from "@/components/main/FormTodo";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getJson = async () => {
  const { data } = await axios.get(`${url}/todos`);
  console.log(data);

  return data;
};

export const postJson = async (newTodo: Todo) => {
  await axios.post(`${url}/todos`, newTodo);
};
