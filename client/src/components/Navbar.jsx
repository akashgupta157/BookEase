import React from "react";
import styled from "styled-components";
import logo from "../Image/BookEase-removebg-preview.png";
import hotel from "../Image/hotel1.png";
import flight from "../Image/fl.png";
import homestays from "../Image/hs.png";
import holiday from "../Image/hp1.png";
import train from "../Image/t1.png";
import bus from "../Image/b1.png";
import cab from "../Image/c.png";
import forex from "../Image/f.png";
import cf from "../Image/cf.png";
import { AiOutlineLogin } from "react-icons/ai";
export default function Navbar() {
  return (
    <DIV>
      <img src={logo} alt="" />
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
      <button>
        <AiOutlineLogin />
        Login or Create Account
      </button>
    </DIV>
  );
}
const DIV = styled.div`
  z-index: 100;
  width: 100%;
  position: fixed;
  background-color: white;
  padding: 0px 80px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  gap: 20px;
  height: 10vh;
  align-items: center;
  img {
    width: 15%;
    cursor: pointer;
  }
  .tab {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
        width: 30px;
        height: 25px;
        object-fit: contain;
      }
      p {
        color: #4a4a4a;
        font-size: 14px;
      }
    }
    > div:first-child {
      p {
        color: white;
        background-color: #008dfe;
        border-radius: 10px;
        padding: 2px;
      }
    }
  }
  button {
    height: fit-content;
    width: 150px;
    margin-left: 20%;
    border: 0px;
    font-weight: bold;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      font-size: 30px;
    }
  }
`;
