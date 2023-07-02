import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hotel" element={<HotelPage />} />
      </Routes>
    </div>
  );
}
