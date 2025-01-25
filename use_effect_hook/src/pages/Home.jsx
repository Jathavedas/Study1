import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const { username } = useContext(AppContext);
  const {setUsername} = useContext(AppContext)
  const [name,setname] = useState("")
  return(
  <>

  <div>Home user is {username}</div>
  <input type="text" placeholder="Enter Your name" onChange={(event) => setname(event.target.value)} />
  <button onClick={()=>setUsername(name)}>Submit</button>  
  </>
  );
};

export default Home;
