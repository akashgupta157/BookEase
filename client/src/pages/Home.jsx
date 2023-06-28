import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../Image/BookEase1-removebg-preview.png";
import hotel from "../Image/hotel1.png";
import flight from "../Image/fl.png";
import homestays from "../Image/hs.png";
import holiday from "../Image/hp1.png";
import train from "../Image/t1.png";
import bus from "../Image/b1.png";
import cab from "../Image/c.png";
import forex from "../Image/f.png";
import cf from "../Image/cf.png";
import { BsChevronDown } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Navbar from "../components/Navbar";
import Slider from "react-slick";
export default function Home() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setShowComponent(scrollPosition > 100);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
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
  const [searchTerm, setSearchTerm] = useState(cities[0]);
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
  const [checkInDate, setCheckInDate] = useState(currentDate);
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
  const getNextDayFormatted = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const nextDay = currentDate.toISOString().split("T")[0];
    return nextDay;
  };
  const [checkOutDate, setCheckOutDate] = useState(getNextDayFormatted());
  const [checkOutDay, setCheckOutDay] = useState(getCurrentDayFormatted());
  useEffect(() => {
    const dateObj = new Date(checkOutDate);
    const options = { weekday: "long" };
    const selectedDay = dateObj.toLocaleDateString("en-IN", options);
    setCheckOutDay(selectedDay);
  }, [checkOutDate]);
  //date
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  return (
    <>
      {showComponent && <Navbar />}
      <DIV city={matchedCities}>
        <nav>
          <img src={logo} alt="" />
          <button>
            <p>Login or Create Account</p>
            <BsChevronDown />
          </button>
        </nav>
        <div className="tab">
          <div>
            <img src={hotel} alt="" />
            <p>Hotels</p>
          </div>
          <div>
            <img src={flight} alt="" />
            <p>Flights</p>
          </div>
          <div>
            <img src={homestays} alt="" />
            <p>Homestays</p>
          </div>
          <div>
            <img src={holiday} alt="" />
            <p>Holiday Packages</p>
          </div>
          <div>
            <img src={train} alt="" />
            <p>Trains</p>
          </div>
          <div>
            <img src={bus} alt="" />
            <p>Buses</p>
          </div>
          <div>
            <img src={cab} alt="" />
            <p>Cabs</p>
          </div>
          <div>
            <img src={forex} alt="" />
            <p>Forex</p>
          </div>
          <div>
            <img src={cf} alt="" />
            <p>Charter Flights</p>
          </div>
        </div>
        <div className="main">
          <section>
            <label htmlFor="one">
              <input type="radio" name="one" id="" checked />
              <p>Upto 4 Rooms</p>
            </label>
            <label htmlFor="two">
              <input type="radio" name="two" id="" />
              <p>Group Deals</p>
            </label>
          </section>
          <div>
            <label htmlFor="city">
              <p>CITY, PROPERTY NAME OR LOCATION</p>
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
              <span>India</span>
            </label>
            <label htmlFor="checkInDate">
              <p>
                CHECK-IN <BsChevronDown />
              </p>
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
              <span>{checkInDay}</span>
            </label>
            <label htmlFor="checkOut">
              <p>
                CHECK-OUT <BsChevronDown />
              </p>
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
              <span>{checkOutDay}</span>
            </label>
            <label htmlFor="room">
              <p>
                ROOMS & GUESTS <BsChevronDown />
              </p>
            </label>
            <label htmlFor="price">
              <p>
                PRICE PER NIGHT <BsChevronDown />
              </p>
            </label>
          </div>
          <button>SEARCH</button>
        </div>
      </DIV>
      <Offers>
        <h1>Offers</h1>
        <div>
          <div>
            <section>
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-hyatt-15052023.jpg?im=Resize=(134,134)"
                alt=""
              />
              <span>T&C's Apply</span>
            </section>
            <section>
              <p>Grab up to 10% Cashback*</p>
              <hr />
              <span>on Haytt Hotels with BookEase.com</span>
              <small>VIEW DETAILS</small>
            </section>
          </div>
        </div>
      </Offers>
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
const DIV = styled.div`
  background: rgb(19, 68, 120);
  background: linear-gradient(
    0deg,
    rgba(19, 68, 120, 1) 1%,
    rgba(7, 20, 37, 1) 69%
  );
  height: 550px;
  nav {
    width: 1200px;
    margin: auto;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    img {
      width: 15%;
      cursor: pointer;
    }
    button {
      cursor: pointer;
      height: fit-content;
      padding: 9px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      border-radius: 5px;
      border: 0px;
      outline: 0px;
      background: linear-gradient(to left, #0a5fba 1%, #58a1fb 69%);
      font-size: small;
      color: white;
      font-weight: bold;
    }
  }
  .tab {
    height: 80px;
    background-color: white;
    border-radius: 10px;
    width: 800px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translate(-50%, -50%);
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 80%;
      align-items: center;
      cursor: pointer;
      img {
        margin: auto;
        display: block;
        width: 50px;
        height: 40px;
        object-fit: contain;
      }
      p {
        color: #4a4a4a;
        font-size: 14px;
      }
    }
    > div:first-child {
      p {
        color: #008dfe;
        border-bottom: 3px solid #008dfe;
      }
    }
  }
  .main {
    width: 1200px;
    margin: auto;
    background-color: white;
    height: 280px;
    border-radius: 10px;
    margin-top: 60px;
    padding: 30px;
    padding-top: 70px;
    section {
      display: flex;
      gap: 20px;
      label {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: bolder;
        color: #4a4a4a;
      }
      > label:first-child {
        background-color: lightblue;
        border-radius: 15px;
        padding: 5px;
        color: black;
      }
    }
    div {
      display: flex;
      margin-top: 15px;
      justify-content: space-between;
      border: 0.1px solid lightgray;
      border-radius: 5px;
      label {
        padding: 10px 15px;
        border-left: 1px solid lightgray;
        display: flex;
        flex-direction: column;
        p {
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 600;
          color: #4a4a4a;
          svg {
            font-size: 14px;
            color: #008dfe;
          }
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
          top: 315px;
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
        input {
          border: 0;
          outline: 0;
          font-size: 30px;
          font-weight: bolder;
          margin-top: 5px;
          font-family: "Lato", sans-serif;
        }
        input[type="date"] {
          font-size: 22px;
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
    }
    button {
      position: absolute;
      top: 410px;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 250px;
      height: 50px;
      font-size: 26px;
      background: rgb(19, 68, 120);
      background: linear-gradient(to left, #0e74e1 1%, #8cbdf9 69%);
      border: 0;
      font-weight: bolder;
      color: white;
      border-radius: 50px;
      cursor: pointer;
    }
  }
`;
const Offers = styled.div`
  width: 1200px;
  margin: auto;
  position: absolute;
  top: 600px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  h1 {
    color: #443d3d;
  }
  div div {
    margin-top: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: max-content;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    gap: 15px;
    hr {
      width: 30px;
      margin-top: 10px;
      margin-bottom: 10px;
      border-top: 1px solid red;
    }
    section {
      display: flex;
      flex-direction: column;
    }
    p {
      font-size: larger;
      font-weight: bolder;
    }
    span {
      font-size: small;
      color: #443d3d;
    }
    small {
      margin-top: 35%;
      font-weight: bolder;
      text-align: right;
      color: #008dfe;
    }
  }
`;
