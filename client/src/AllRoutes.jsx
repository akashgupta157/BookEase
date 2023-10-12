import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import { SingleHotelPage } from "./pages/SingleHotelPage";
import HotelForm from "./pages/HotelForm";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/add" element={<HotelForm />} />
        <Route path="/hotel/:id" element={<SingleHotelPage />} />
      </Routes>
    </div>
  );
}
