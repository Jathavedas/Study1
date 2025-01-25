import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Jathu");

  return (
    <>
    <AppContext.Provider value={{username,setUsername}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile  />} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
