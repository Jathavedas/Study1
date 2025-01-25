import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { data, isLoading, error } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Cat Fact</h1>
      <p>{data.fact}</p>
    </div>
  );
};

export default Home;
