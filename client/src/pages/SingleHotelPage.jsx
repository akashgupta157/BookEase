import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { url } from "../components/url";
import { CircularProgress } from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
export const SingleHotelPage = () => {
  const Nav = useNavigate();
  const param = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    city: "",
    location: "",
    description: "",
    price: "",
    rating: "",
    images: ["", "", "", "", ""],
  });
  const getHotel = async () => {
    setLoading(true);
    await axios.get(`${url}/hotel/${param.id}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getHotel();
  }, [param]);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <AiFillStar
        key={i}
        style={{
          color: i <= data.rating ? "white" : "gray",
          fontSize: "20px",
          marginRight: "5px",
        }}
      />
    );
  }
  return (
    <>
      {loading ? (
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
        <Div img={data.images}>
          <div>
            <div id="breadcrumb">
              <p onClick={() => Nav("/")}>Home</p>
              <MdArrowForwardIos />
              <p onClick={() => Nav("/hotel", { state: location.state })}>
                Hotels in {data.city}
              </p>
              <MdArrowForwardIos />
              <p>{data.name}</p>
            </div>
            <div id="title">
              <h1>{data.name}</h1>
              <p>{stars}</p>
            </div>
            <section>
              <img src={data.images[4]} alt="" />
              
              <button>book this now</button>
            </section>
          </div>
        </Div>
      )}
    </>
  );
};
const Div = styled.div`
  > div {
    height: 80vh;
    background-image: ${(props) => `url(${props.img})`};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    #breadcrumb {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-top: 3%;
      padding-left: 6%;
      color: white;
      font-weight: bold;
      p {
        cursor: pointer;
      }
    }
    #title {
      background-color: rgba(0, 0, 0, 0.671);
      height: 100px;
      display: flex;
      align-items: center;
      gap: 10px;
      h1 {
        color: white;
        padding-left: 6%;
        display: flex;
        height: 100%;
        align-items: center;
      }
    }
    section {
      background-color: white;
      width: 400px;
      height: 400px;
      position: absolute;
      right: 5%;
      top: 45%;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      padding: 25px;
      img {
        width: 100%;
        border-radius: 15px;
        display: block;
        margin: auto;
      }
      button {
        background: linear-gradient(to left, #0a5fba 1%, #58a1fb 69%);
        border: 0px;
        width: 100%;
        border-radius: 10px;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: larger;
        padding: 15px 0;
      }
    }
  }
`;
