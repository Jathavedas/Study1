import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = () => {
  const {username} = useContext(AppContext);
  return <div>Profile of {username}</div>;
};

export default Profile;
