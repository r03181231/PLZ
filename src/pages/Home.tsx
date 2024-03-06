import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import FormTodo from "@/components/main/FormTodo";
import TodoList from "@/components/main/TodoList";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <FormTodo />
        <TodoList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
