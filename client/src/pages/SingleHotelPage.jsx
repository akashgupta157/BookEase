import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { url } from "../components/url";
import { CircularProgress } from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrCaretPrevious, GrCaretNext, GrFormNextLink } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { BsCheck } from "react-icons/bs";
import { toIndianCurrency } from "../components/toIndianCurrency";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export const SingleHotelPage = () => {
  const Nav = useNavigate();
  const param = useParams();
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
  }, []);
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
  function percentage(percentageValue, totalValue) {
    return (percentageValue * totalValue) / 100;
  }
  return (
    <>
      {/* {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <CircularProgress size={80} />
        </div> */}
      {/* ) : ( */}
      <Div img={data.images}>
        <div>
          <div id="breadcrumb">
            <p onClick={() => Nav("/")}>Home</p>
            <MdArrowForwardIos />
            <p onClick={() => Nav("/hotel")}>Hotels in {data.city}</p>
            <MdArrowForwardIos />
            <p>{data.name}</p>
          </div>
          <div id="title">
            <h1>{data.name}</h1>
            <p>{stars}</p>
          </div>
          <section>
            <img src={data.images[4]} alt="" />
            <h3>Premiere Room , King/Twin Be...</h3>
            <div>
              <div>
                <p
                  style={{
                    color: "#4a4a4a",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  <FaUserFriends />
                  For 2 Adults
                </p>
                <p
                  style={{
                    color: "#d0021b",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  <RxCross2 />
                  Non-Refundable
                </p>
                <p
                  style={{
                    color: "#4a4a4a",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  <BsCheck />
                  Room Only
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#4a4a4a",
                    fontWeight: 400,
                  }}
                >
                  Per Night
                </p>
                <strike
                  style={{
                    fontSize: "14px",
                    color: "#727272",
                    fontWeight: 400,
                  }}
                >
                  {toIndianCurrency(
                    Math.ceil(data.price + percentage(10, data.price))
                  )}
                </strike>
                <p
                  style={{
                    fontSize: "22px",
                    color: "#000000",
                    fontWeight: 900,
                  }}
                >
                  {toIndianCurrency(data.price)}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#727272",
                    fontWeight: 700,
                  }}
                >
                  + {toIndianCurrency(Math.ceil(percentage(18, data.price)))}{" "}
                  taxes & fees
                </p>
              </div>
            </div>
            <button>book this now</button>
          </section>
        </div>
        <div>
          <div>
            <span>{data.rating}</span>
            <div>
              <p>
                {data.rating <= 5 && data.rating >= 4.3
                  ? "Excellent"
                  : data.rating < 4.3 && data.rating >= 3.5
                  ? "Very Good"
                  : "Good"}
              </p>
              <p>(2344 Ratings)</p>
            </div>
          </div>
          <div>
            <p>
              <FaLocationDot />
            </p>
            <div>
              <p>{data.location}</p>
              <p>View On Map</p>
            </div>
          </div>
        </div>
        <div>
          <h1>About {data.name}</h1>
          <p>{data.description}</p>
          <div>
            <section>
              <Carousel
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
              >
                {data.images.map((e) => (
                  <img src={e} alt="" />
                ))}
              </Carousel>
            </section>
            <section>
              <div>
                <p>
                  Food and Dining
                  <GrFormNextLink style={{ fontSize: "20px" }} />
                </p>
                <img
                  src="https://promos.makemytrip.com/Hotels_product/Luxe/Weaver/Food.png"
                  alt=""
                />
              </div>
              <div>
                <p>
                  Location & Surroundings
                  <GrFormNextLink style={{ fontSize: "20px" }} />
                </p>
                <img
                  src="https://promos.makemytrip.com/Hotels_product/Luxe/Weaver/Location.png"
                  alt=""
                />
              </div>
              <div>
                <p>
                  Property Highlights
                  <GrFormNextLink style={{ fontSize: "20px" }} />
                </p>
                <img
                  src="https://promos.makemytrip.com/Hotels_product/Luxe/Weaver/Property_Highlights.png"
                  alt=""
                />
              </div>
              <div>
                <p>
                  Room Details and Amenities
                  <GrFormNextLink style={{ fontSize: "20px" }} />
                </p>
                <img
                  src="https://promos.makemytrip.com/Hotels_product/Luxe/Weaver/Options.png"
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
      </Div>
      {/* )} */}
    </>
  );
};
const Div = styled.div`
  > div:first-child {
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
      width: 380px;
      height: 430px;
      position: absolute;
      right: 5%;
      top: 45%;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      padding: 25px;
      img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: 15px;
        display: block;
        margin: auto;
      }
      h3 {
        padding: 20px 0px;
        font-weight: 900;
      }
      > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        div:first-child {
          p {
            display: flex;
            align-items: center;
            gap: 5px;
          }
        }
        div:last-child {
          text-align: right;
          margin-bottom: 30px;
        }
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
  > div:nth-child(2) {
    display: flex;
    padding: 20px;
    padding-left: 6%;
    gap: 240px;
    > div:first-child {
      display: flex;
      align-items: center;
      gap: 15px;
      span {
        background-color: #0b59b5;
        color: white;
        padding: 20px;
        font-weight: 900;
        font-size: 28px;
        border-radius: 10px;
      }
      div {
        p:first-child {
          color: #0b58b4;
          font-weight: 900;
          font-size: 18px;
        }
        p:last-child {
          color: #008cff;
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
    > div:last-child {
      display: flex;
      align-items: center;
      gap: 15px;
      > p {
        background-image: url(https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/map-bg-new.png);
        background-size: cover;
        background-position: center;
        padding: 20px;
        border-radius: 10px;
        svg {
          color: red;
          font-size: 28px;
          border-radius: 10px;
        }
      }
      div {
        p:first-child {
          color: black;
          font-weight: 900;
          font-size: 18px;
        }
        p:last-child {
          color: #008cff;
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
  }
  > div:nth-child(3) {
    margin-top: 50px;
    h1 {
      background: -webkit-linear-gradient(
        270deg,
        rgba(237, 181, 103, 1) 70%,
        rgba(255, 255, 255, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      font-weight: 900;
    }
    > p {
      margin: auto;
      margin-top: 10px;
      text-align: center;
      width: 60%;
      font-size: 16px;
      font-weight: 700;
      color: #4a4a4a;
    }
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      gap: 100px;
      > section:first-child {
        width: 30%;
      }
      > section:last-child {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        div {
          border: 1px solid #edb466;
          background: linear-gradient(to bottom, #ffffff 70%, #fff5e8 100%);
          border-radius: 5px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: end;
          justify-content: space-between;
          gap: 15px;
          width: 130px;
          height: 100px;
          p {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 700;
            color: black;
          }
          img {
            width: 30px;
          }
        }
      }
    }
  }
  /* margin-bottom: 100px; */
`;
