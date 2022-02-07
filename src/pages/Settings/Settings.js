import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {


    const navigation = useNavigate()

  return (
    <div>
      <p>Settings</p>
      <div className="new-btn" onClick={() => navigation("/")}>
        <p className="btn-text">Home</p>
      </div>
    </div>
  );
};

export default Settings;
