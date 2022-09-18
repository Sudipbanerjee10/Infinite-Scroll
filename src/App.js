import React from "react";
import "./App.scss";
import InfiniteQuery from "./components/infinite-query/InfiniteQuery";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <InfiniteQuery />
    </QueryClientProvider>
  );
};

export default App;
