import React, { useEffect, useState } from "react";
import "./css/app.module.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
export default function App() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setShowComponent(scrollPosition > 100);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  let location = useLocation();
  return (
    <>
      {location.pathname === "/" ? showComponent && <Navbar /> : <Navbar />}
      <AllRoutes />
    </>
  );
}
