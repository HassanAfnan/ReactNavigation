import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {


    const navigation = useNavigate()

  return (
    <div>
      <p>home</p>
      <div className="upper">
      <div className="new-btn" onClick={()=> navigation("/settings")}>
          <p className="btn-text">Settings</p>
      </div>
      </div>
    </div>
  );
};

export default Home;
