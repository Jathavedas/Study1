import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [catfact, setCatfact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);
  return (
    <>
      <button onClick={fetchCatFact}>generate</button>
      <h1>{catfact}</h1>
    </>
  );
}

export default App;
