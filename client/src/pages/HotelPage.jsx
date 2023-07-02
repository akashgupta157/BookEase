import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
export default function HotelPage() {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 60;
      setIsSticky(scrollTop > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarStyles = {
    position: isSticky ? "fixed" : "relative",
    top: 0,
    height: isSticky ? "65px" : null,
    width: "100%",
  };
  const navbarStyles1 = {
    display: isSticky ? "none" : "block",
  };
  //city
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Allahabad",
    "Ranchi",
    "Howrah",
    "Coimbatore",
    "Jabalpur",
    "Gwalior",
    "Vijayawada",
    "Jodhpur",
    "Madurai",
    "Raipur",
    "Kota",
    "Chandigarh",
    // Add more cities as needed
  ];
  const [searchTerm, setSearchTerm] = useState(location.state.city);
  const [matchedCities, setMatchedCities] = useState([]);
  const handleInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const matchedCities = cities.filter((city) =>
      city.toLowerCase().startsWith(searchTerm)
    );
    setMatchedCities(matchedCities);
  };
  const handleSuggestionClick = (city) => {
    setSearchTerm(city);
    setMatchedCities([]);
  };
  //city
  //date
  const currentDate = new Date().toISOString().split("T")[0];
  const [checkInDate, setCheckInDate] = useState(location.state.checkInDate);
  const getCurrentDayFormatted = () => {
    const currentDate = new Date();
    const options = { weekday: "long" };
    const currentDay = currentDate.toLocaleDateString("en-US", options);
    return currentDay;
  };
  const [checkInDay, setCheckInDay] = useState(getCurrentDayFormatted());
  useEffect(() => {
    const dateObj = new Date(checkInDate);
    const options = { weekday: "long" };
    const selectedDay = dateObj.toLocaleDateString("en-IN", options);
    setCheckInDay(selectedDay);
  }, [checkInDate]);
  const [checkOutDate, setCheckOutDate] = useState(location.state.checkOutDate);
  const [checkOutDay, setCheckOutDay] = useState(getCurrentDayFormatted());
  useEffect(() => {
    const dateObj = new Date(checkOutDate);
    const options = { weekday: "long" };
    const selectedDay = dateObj.toLocaleDateString("en-IN", options);
    setCheckOutDay(selectedDay);
  }, [checkOutDate]);
  //date
  return (
    <>
      <Nav1 city={matchedCities} style={navbarStyles}>
        <nav>
          <div>
            <p>
              CITY, AREA OR PROPERTY
              <BsChevronDown />
            </p>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <ul>
              {matchedCities.map((city, index) => (
                <li key={index} onClick={() => handleSuggestionClick(city)}>
                  <CiLocationOn />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>
              CHECK-IN <BsChevronDown />
            </p>
            <section
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <span>{checkInDay.slice(0, 3)},</span>
              <input
                type="date"
                id="checkInDate"
                value={checkInDate}
                min={currentDate}
                onChange={(e) => {
                  setCheckInDate(e.target.value);
                  handleCheckInDateChange();
                }}
              />
            </section>
          </div>
          <div>
            <p>
              CHECK-OUT <BsChevronDown />
            </p>
            <section
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <span>{checkOutDay.slice(0, 3)},</span>
              <input
                type="date"
                id="checkInDate"
                value={checkOutDate}
                min={checkOutDate}
                onChange={(e) => {
                  setCheckOutDate(e.target.value);
                  handleCheckInDateChange();
                }}
              />
            </section>
          </div>
          <div>
            <p>ROOMS & GUESTS</p>
            <span style={{ paddingRight: "40px" }}>1 Room, 2 Adults</span>
          </div>
          <button>SEARCH</button>
        </nav>
        <nav style={navbarStyles1}>
          <div>
            <Link to="/">HOME</Link>›
            <p>Hotels and more in {location.state.city}</p>
          </div>
          <h1>1000 Properties in {location.state.city}</h1>
        </nav>
      </Nav1>
      <Nav2>
        <div>
          <label htmlFor="">
            SORT BY:
            <select name="" id="">
              <option value="Featured">Featured</option>
              <option value="Price (Highest First)">
                Price (Highest First)
              </option>
              <option value="Price (Lowest First)">Price (Lowest First)</option>
              <option value="User Rating(Highest First)">
                User Rating (Highest First)
              </option>
            </select>
          </label>
          <input type="search" name="" id="" />
        </div>
      </Nav2>
      <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    </>
  );
}
const Nav1 = styled.nav`
  background: rgb(19, 68, 120);
  background: linear-gradient(
    0deg,
    rgba(19, 68, 120, 1) 1%,
    rgba(7, 20, 37, 1) 69%
  );
  position: fixed;
  width: 100%;
  height: 150px;
  > nav:first-child {
    margin: auto;
    width: 1200px;
    z-index: 100;
    padding-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    div {
      background-color: #223546;
      width: fit-content;
      border-radius: 5px;
      padding: 5px;
      padding-left: 10px;
      height: 45px;
      p {
        font-size: 12px;
        color: #1389ef;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 5px;
      }
      span {
        color: white;
      }
      input {
        background-color: transparent;
        border: 0;
        outline: none;
        color: white;
        font-size: 16px;
        width: fit-content;
      }
      ul {
        overflow-y: scroll;
        height: 150px;
        width: 20%;
        position: absolute;
        background-color: #fefeff;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 10px;
        border-radius: 5px;
        list-style: none;
        top: 120px;
        li {
          font-size: 18px;
          padding: 5px;
          display: flex;
          align-items: center;
          cursor: pointer;
          gap: 5px;
          :hover {
            background-color: lightgray;
          }
        }
        display: ${(props) => (props.city.length > 0 ? "block" : "none")};
        ::-webkit-scrollbar {
          width: 0;
        }
      }
      input[type="date"] {
        border: none;
        box-sizing: border-box;
        outline: 0;
        position: relative;
        width: 100%;
      }
      input[type="date"]::-webkit-calendar-picker-indicator {
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
      }
    }
    button {
      width: 200px;
      height: 45px;
      border-radius: 50px;
      border: 0px;
      outline: 0px;
      background: linear-gradient(to left, #0a5fba 1%, #58a1fb 69%);
      font-size: larger;
      color: white;
      font-weight: bold;
      margin-left: 50px;
    }
  }
  > nav:last-child {
    margin: auto;
    width: 1200px;
    padding-top: 30px;
    div {
      display: flex;
      align-items: center;
      font-size: smaller;
      font-weight: bold;
      color: white;
      gap: 10px;
      a {
        font-size: smaller;
        font-weight: bold;
        color: #1389ef;
        text-decoration: none;
      }
    }
    h1 {
      font-size: 32px;
      color: white;
    }
  }
`;
const Nav2 = styled.nav`
  background-color: #dff1fb;
  padding: 20px;
  div {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;
