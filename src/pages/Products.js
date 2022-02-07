import React, { useState } from "react";
import Details from "./Details";
import "./Products.css";
import { useNavigate, Outlet } from "react-router-dom";

const Products = () => {
  const navigation = useNavigate();

  const [arrayOfData, setArrayOfData] = useState([
    {
      name: "banana",
      id: 1,
    },
    {
      name: "mango",
      id: 2,
    },
    {
      name: "orange",
      id: 3,
    },
    {
      name: "grape",
      id: 4,
    },
  ]);

  return (
    <div className="flexer">
      {arrayOfData.map((data) => {
        return (
          <div
            className="each-card"
            onClick={() => navigation(`/products/${data.id}/${data.name}`)}
          >
            <p>{data.name}</p>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Products;
