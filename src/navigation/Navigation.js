import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home/Home";
import Products from "../pages/Products";
import Settings from "../pages/Settings/Settings";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/products" element={<Products />}>
          {/* <Route path=":id" element={<Details />} /> */}
      </Route>
      <Route path="/products/:id/:name" element={<Details />} />
      <Route
        path="*"
        element={
          <div>
            <p>oops, wrong url</p>
          </div>
        }
      />
    </Routes>
  );
};

export default Navigation;
