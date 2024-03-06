import axios from "axios";

const url = import.meta.env.VITE_API_URL;
console.log(url);

export const getJson = async () => {
  const data = await axios.get(`${url}/todos`);
  console.log(data);
  return data;
};
