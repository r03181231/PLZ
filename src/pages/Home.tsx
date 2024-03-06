import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import FormTodo from "@/components/main/FormTodo";
// import { useQuery } from "react-query";

const Home = () => {
  // const { isLoding, data, isError} = useQuery()
  return (
    <div>
      <Header />
      <FormTodo />
      <Footer />
    </div>
  );
};

export default Home;
