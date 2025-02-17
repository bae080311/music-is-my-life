import Router from "./app/router";
import "../src/app/reset.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
