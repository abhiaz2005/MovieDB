import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";
import People from "../components/People";
import Popular from "../components/Popular";
import Sports from "../components/Sports";
import Movies from "../components/Movies";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/people" element={<People />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};

export default Routing;
