// import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
