import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id,name } = useParams();

  return (
    <div>
      <p>{name}</p>
      <p style={{ color: "black" }}>{id}</p>
    </div>
  );
};

export default Details;
