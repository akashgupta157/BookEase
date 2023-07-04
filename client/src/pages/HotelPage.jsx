import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import {
  BsCheck,
  BsChevronDown,
  BsFillLightningFill,
  BsSearch,
} from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { url } from "../components/url";
import CircularProgress from "@mui/material/CircularProgress";
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
  const navbarStyle2 = {
    position: isSticky ? "fixed" : "relative",
    top: isSticky ? "65px" : null,
    width: "100%",
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
  const [hotelLoading, setHotelLoading] = useState(false);
  const [hotelData, setHotelData] = useState([]);
  const [imgHover, setImgHover] = useState();
  const fetchHotelData = async () => {
    setHotelLoading(true);
    await axios.get(`${url}/hotel/${location.state.city}`).then((res) => {
      setHotelData(res.data);
      setHotelLoading(false);
    });
  };
  useEffect(() => {
    fetchHotelData();
  }, [location.state.city]);
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
      <Nav2 style={navbarStyle2}>
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
          <div>
            <BsSearch />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search for locality / hotel name"
            />
          </div>
        </div>
      </Nav2>
      {hotelLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <CircularProgress size={80} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            width: "1200px",
            margin: "auto",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          <Sidebar />
          <HotelList>
            <h1>Popular in {location.state.city}</h1>
            {hotelData.map((e) => (
              <div className="mainHotel">
                <section>
                  <img src={imgHover || e.image[0]} alt="" />
                  <div>
                    <img
                      src={e.image[1]}
                      onMouseOver={() => setImgHover(e.image[1])}
                      alt=""
                    />
                    <img
                      src={e.image[2]}
                      onMouseOver={() => setImgHover(e.image[2])}
                      alt=""
                    />
                    <img
                      src={e.image[3]}
                      onMouseOver={() => setImgHover(e.image[3])}
                      alt=""
                    />
                    <img
                      src={e.image[0]}
                      onMouseOver={() => setImgHover(e.image[0])}
                      alt=""
                    />
                  </div>
                </section>
                <section>
                  <span>
                    <p>{e.rating}</p>
                    {e.rating <= 5 && e.rating >= 4.3
                      ? "Excellent"
                      : e.rating < 4.3 && e.rating >= 3.5
                      ? "Very Good"
                      : "Good"}
                  </span>
                  <h1>{e.name}</h1>
                  <small>{e.location}</small>
                  <h5>Couple Friendly</h5>
                  <h6>
                    <BsCheck /> Book with ₹0 Payment
                  </h6>
                  <h6>
                    <BsCheck />
                    Free Cancellation
                  </h6>
                  <h4>
                    <BsFillLightningFill />
                    100% Monet Back Guarantee on Clean rooms with TV, AC & Free
                    Wi-Fi
                  </h4>
                </section>
                <section>₹{e.price}</section>
              </div>
            ))}
          </HotelList>
        </div>
      )}
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
        top: 50px;
        z-index: 100;
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
  padding: 10px;
  > div {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      color: #4a4a4a;
      font-weight: bold;
      select {
        border: 0px;
        outline: none;
        background-color: transparent;
        color: #33a5fe;
        font-size: medium;
        width: fit-content;
        option {
          color: black;
        }
      }
    }
    div {
      display: flex;
      align-items: center;
      background-color: white;
      padding-left: 10px;
      input {
        padding: 8px;
        width: 250px;
        outline: none;
        font-size: 14px;
        border: 0;
      }
    }
  }
`;
const HotelList = styled.div`
  width: 80%;
  .mainHotel {
    border: 1px solid gray;
    padding: 20px;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    gap: 20px;
    > section:first-child {
      width: 250px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      > img {
        width: 100%;
      }
      div {
        display: flex;
        gap: 5px;
        img {
          cursor: pointer;
          width: 58.5px;
          object-fit: contain;
        }
      }
    }
    > section:nth-child(2) {
      width: 450px;
      span {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #0a59b4;
        font-size: 13px;
        font-weight: 900;
        p {
          background-color: #0a59b4;
          padding: 3px;
          border-radius: 5px;
          color: white;
          font-size: 12px;
          font-weight: 900;
        }
      }
      h1 {
        margin-top: 7px;
      }
      small {
        color: #2d7fdc;
        font-weight: 900;
      }
      h4 {
        color: #aa846c;
        margin-top: 7px;
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 5px;
        svg {
          border: 1px solid #aa846c;
          padding: 2px;
          font-size: 16px;
          border-radius: 50%;
        }
      }
      h5 {
        margin-top: 7px;
        color: #4a4a4a;
        background-color: lightgray;
        width: fit-content;
        padding: 3px 5px;
        border-radius: 5px;
        margin-bottom: 7px;
      }
      h6 {
        color: green;
        display: flex;
        align-items: center;
        svg {
          font-size: 20px;
        }
      }
    }
    > section:last-child {
      width: 200px;
    }
  }
  .mainHotel:hover {
    border: 1px solid blue;
    background-color: #f0f2f5;
  }
`;
