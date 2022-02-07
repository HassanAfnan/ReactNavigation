import React, { useState, useEffect } from "react";
import Details from "./Details";
import "./Products.css";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const navigation = useNavigate();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    var config = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(config)
      .then((resp) => {
        setPhotos(resp.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  console.log(photos);

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
      {photos.map((photo, index) => {
        if (photo.id < 10) {
          return (
            <div
              key={index}
              className="each-card"
                onClick={() => navigation(`/products/${photo.id}/${photo.title}`)}
            >
              <img src={photo.url} style={{ width: "100px", height: "100px" }} />
              <p>{photo.title}</p>
            </div>
          );
        } else return null;
      })}
      <Outlet />
    </div>
  );
};

export default Products;
