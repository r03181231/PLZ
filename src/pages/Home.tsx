// import { getJson } from "@/api/jsonApi";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import FormTodo from "@/components/main/FormTodo";
// import { useQuery } from "react-query";

const Home = () => {
  // const {
  //   isLoading: formTodoLoading,
  //   data: formTodoData,
  //   isError: formTodoError,
  //   status,
  // } = useQuery("formTodo", getJson);

  // console.log(status);

  // if (formTodoLoading) {
  //   return <div>로딩중입니다...</div>;
  // }

  // if (formTodoError) {
  //   return <div>정보를 불러오지 못하고 있습니다...</div>;
  // }
  return (
    <div>
      <Header />
      <FormTodo />
      <Footer />
    </div>
  );
};

export default Home;
