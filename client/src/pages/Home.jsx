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
import { BsChevronDown, BsTwitter } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import AuthModel from "../components/AuthModel";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Home() {
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
  const offers = [
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//116X116-hyatt-15052023.jpg?im=Resize=(134,134)",
      title: "Grab up to 10% Cashback*",
      small: "on Hyatt Hotels with BookEase.com",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//Desktop-Mayfair-210423.jpg?im=Resize=(134,134)",
      title: "FOR A MAGICAL SUMMER STAY: Grab up to 25% OFF*",
      small: "on Mayfar Hotels & Resorts",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//Desktop-Oberoi-210623.jpg?im=Resize=(134,134)",
      title: "Save Up to 25% on Stays",
      small: "+Chance to Win Free* STAYS EVERY DAY, till 30th June",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//welcome-heritage-dt.jpg?im=Resize=(134,134)",
      title: "Enjoy Up to 40% OFF*",
      small: "on WelcomeHeritage Hotels, Valid from 1st to 30th June",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//116X116-hdfc-emi-21062023.jpg?im=Resize=(134,134)",
      title: "Grab Up to ₹30,000 OFF* on",
      small: "fights, hotels & holiday packages",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//Desktop-HS-Longweekend-30223.jpg?im=Resize=(134,134)",
      title: "Presenting Long Weekend Homestay Mania:",
      small:
        "Grab up to 30% OFF* on homestays, for wow stays this long weekend",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//maldives-dt-28062023.jpg?im=Resize=(134,134)",
      title: "BOOK YOUR STAY IN MALDIVES & GET:",
      small:
        "FREE* Airport Transfer from Velana International Airport, Maldives",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//ih-luxe-116x116-27042023.jpg?im=Resize=(134,134)",
      title: "Ultra-Premium Stays, Only for You!",
      small:
        "Explore Luxe International for Handpicked Stays with Signature Services",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//dubai-116x116-04052023.jpg?im=Resize=(134,134)",
      title: "Check These Out!",
      small: "Stays with the Best Burj Khalifa Views",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//lazypay-116x116-14062023.jpg?im=Resize=(134,134)",
      title: "DON'T MISS: Up to ₹300 Cashback on a",
      small: "minimum transaction of ₹500 for your travel bookings!",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//kotak-dh-116x116-21042023.jpg?im=Resize=(134,134)",
      title: "Grab FLAT 15% OFF* on Hotels in India",
      small: "and save BIG on your dream stay",
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//Citi_JFM23_Bank_DT_Banner_Home.jpg?im=Resize=(134,134)",
      title: "FOR YOU: FLAT 15% OFF*",
      small: "on homestays for your unique getaways!",
    },
  ];
  const scrollContainerRef = useRef(null);
  const handleScroll = (scrollOffset) => {
    const container = scrollContainerRef.current;
    container.scrollTo({
      left: container.scrollLeft + scrollOffset,
      behavior: "smooth",
    });
  };
  const location = [
    {
      img: "https://promos.makemytrip.com/store/GoaDT.JPG",
      title: "Goa",
      small: "Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas",
    },
    {
      img: "https://promos.makemytrip.com/store/DelhiDT.JPG",
      title: "Delhi",
      small: "Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport",
    },
    {
      img: "https://promos.makemytrip.com/store/BangaloreDT.JPG",
      title: "Bangalore",
      small: "Hotels, Budget Hotels, Resorts,Near Airport, Guhantara Resort",
    },
    {
      img: "https://promos.makemytrip.com/images/50x50-Ooty-23052019.png",
      title: "Ooty",
      small: "Hotels, Resorts, Cottges, Budget Hotels, Homestay",
    },
    {
      img: "https://promos.makemytrip.com/store/MumbaiDT.JPG",
      title: "Mumbai",
      small:
        "Hotels, Budget Hotels, Resorts, Couple Hotels, Near Mumbai Airport",
    },
    {
      img: "https://promos.makemytrip.com/images/50x50-Shimla-23052019.png",
      title: "Shimla",
      small: "Hotels, Budget Hotels, Best Hotels, Resorts, Near Mall Road",
    },
    {
      img: "https://promos.makemytrip.com/store/JaipurDT.JPG",
      title: "Jaipur",
      small:
        "Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway Station",
    },
    {
      img: "https://promos.makemytrip.com/images/50x50-Manali-23052019.png",
      title: "Manali",
      small: "Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_1892460739.jpg",
      title: "Dubai",
      small: "Hotels, Budget Hotels, 5 Star Hotels, Apart-Hotels, Homestays",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/popular%20area.jpg",
      title: "Singapore",
      small:
        "Hotels, 5 Star Hotels, Little India, Orchard Road, Hostels, Hotels in Sentosa",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_701150233.jpg",
      title: "Bangkok",
      small:
        "Hotels, 3 Star Hotels, 5 Star Hotels,Hostels, Budget Hotels, Hotels in Sukhumvit",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_1008532504.jpg",
      title: "Pattaya",
      small:
        "Hotels, Budget Hotels, 5 Star Hotels, Resorts, Central Pattaya, Beachfront Properties",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_389416630.jpg",
      title: "Phuket",
      small: "Hotels, Resorts, Budget Hotels, Beachfront Properties",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_1306548694.jpg",
      title: "Bali",
      small:
        "Hotels, Resorts, 5 Star Hotels, Budget Hotels, Villas In Bali, Beach-front Properties",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_1901686090.jpg",
      title: "Maldives",
      small:
        "Hotels, 3 Star Hotels, Resorts, 5 Star Hotels, 4 Star Hotels, Hotels in Male",
    },
    {
      img: "https://promos.makemytrip.com/images/50x50-Other-23052019.png",
      title: "Others",
      small: "Puri Hotels, OYO Delhi, Alleppey Houseboat, Mahabaleshwar Hotels",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const auth = useSelector((state) => state.authReducer.isAuthenticated);
  const navigate = useNavigate();
  const obj = {
    city: searchTerm,
    checkInDate,
    checkOutDate,
  };
  const to = () => {
    navigate("hotel", { state: obj });
  };
  return (
    <>
      <DIV city={matchedCities}>
        <nav>
          <img src={logo} alt="" />
          {auth ? (
            <small>Hi Traveler</small>
          ) : (
            <button onClick={handleOpen}>
              <p>Login or Create Account</p>
              <BsChevronDown />
            </button>
          )}
          <AuthModel open={open} onClose={handleClose} />
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
          <button onClick={() => to()}>SEARCH</button>
        </div>
      </DIV>
      <br />
      <Offers>
        <div id="top">
          <h1>Offers</h1>
          <section className="button-container">
            <button onClick={() => handleScroll(-925)}>
              <FcPrevious />
            </button>
            <button onClick={() => handleScroll(925)}>
              <FcNext />
            </button>
          </section>
        </div>
        <div ref={scrollContainerRef}>
          {offers.map((e, index) => (
            <div key={index}>
              <section>
                <img src={e.img} alt="" />
                <span>T&C's Apply</span>
              </section>
              <section>
                <b>
                  <p>{e.title}</p>
                  <hr />
                  <span>{e.small}</span>
                </b>
                <small>VIEW DETAILS</small>
              </section>
            </div>
          ))}
        </div>
      </Offers>
      <br />
      <Div>
        {location.map((e, i) => (
          <div key={i}>
            <Avatar src={e.img} sx={{ width: 50, height: 50 }} />
            <div>
              <h3>{e.title}</h3>
              <small>{e.small}</small>
            </div>
          </div>
        ))}
      </Div>
      <br />
      <br />
      <Footer>
        <div>
          <b>PRODUCT OFFERING</b>
          <br />
          <br /> Flights, International Flights, Charter Flights, Hotels,
          International Hotels, Homestays and Villas, Activities, Holidays In
          India, International Holidays, Book Hotels From UAE, myBiz for
          Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train
          Tickets, Cheap Tickets to India, Book Flights From US, Book Flights
          From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel
          Blog, PNR Status, BookEase.com Advertising Solutions, One Way Cab
          <br />
          <br />
          <b>BookEase.com</b>
          <br />
          <br /> About Us, Investor Relations, Careers, MMT Foundation, CSR
          Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your
          hotel, Partners- Redbus, Partners- Goibibo, Advertise with Us <br />
          <br />
          <b>ABOUT THE SITE</b>
          <br />
          <br /> Customer Support, Payment Security, Privacy Policy, User
          Agreement, Terms of Service, More Offices, Make A Payment, Work From
          Home <br />
          <br />
          <b>TOP CITIES</b>
          <br />
          <br /> Hotels in Thailand, Hotels In Goa, Hotels In Mumbai, Hotels In
          Mahabaleshwar, Hotels In Matheran, Hotels In Lonavala, Hotels In
          Delhi, Hotels In Shimla, Hotels In Lansdowne, Hotels In Digha, Hotels
          In Puri, Hotels In Nainital, Hotels In Shirdi, Hotels In Bangalore,
          Hotels In Mussoorie, Hotels In Manali, Hotels Near Me, Cheap Hotels,
          Hotels In Jaipur, Hotels In Udaipur, Hotels In Pune, Hotels In
          Pondicherry, Hotels In Ooty, Hotels In Kodaikanal, Hotels In
          Darjeeling, Hotels In Chandigarh, Hotels In Mount abu, Hotels In
          Ahmedabad, Hotels In Kolkata, Hotels In Ranthambore, Jaisalmer Hotels,
          Mysore Hotels
          <br />
          <br />
          <b>TOP PROPERTIES</b>
          <br />
          <br /> W Goa, The Leela Goa, The Tamara Coorg, Evolve Back Coorg,
          Grand Hyatt Goa, Taj Lake Palace Udaipur, The Leela Palace Udaipur,
          Grand Hyatt Mumbai, Jw Marriott Chandigarh, Alila Diwa Goa, Evolve
          Back Hampi, Evolve Back Kabini, Hyatt Regency Mumbai, Le Meridien
          Delhi, Itc Grand Chola Chennai, Rambagh Palace Jaipur, Le Meridien
          Goa, Taj Lands End Mumbai, Jai Mahal Palace Jaipur, Vythiri Resort
          Wayanad, Red Earth Kabini, Taj Mahal Tower Mumbai, The Serai Bandipur,
          Wildflower Hall Shimla, Azaya Beach Resort Goa, Four Seasons Hotel
          Mumbai, Taj Fort Aguada Resort & Spa Goa, Itc Maratha Mumbai, Park
          Hyatt Chennai, Sea Shell Havelock, Spice Tree Munnar <br />
          <br />
          <b>TRENDING RESORT CITIES</b>
          <br />
          <br /> Mahabaleshwar Resorts, Resorts In Agra, Resorts In Bhimtal,
          Resorts In Bordi, GraResorts In Br Hills, Resorts In Chikmagalur,
          Resorts In Cochin, Resorts In Darjeeling, Resorts In Dehradun, Resorts
          In Dharamshala, Resorts In Gorai, Resorts In Jaipur, Resorts In
          Jaisalmer, Resorts In Jodhpur, Resorts In Kanakapura, Resorts In
          Kollam, Resorts In Kotagiri, Resorts In Lucknow, Resorts In Madikeri,
          Resorts In Mahabaleshwar, Resorts In Masinagudi, Resorts In Matheran,
          Resorts In Mount Abu, Resorts In Mumbai, Resorts In Munnar, Resorts In
          Mussoorie, Resorts In Mysore, Resorts In Nainital, Resorts In
          Neemrana, Resorts In Kodaikanal <br />
          <br />
          <b>TOP HOMESTAY CITIES </b>
          <br />
          <br />
          Homestays In Chikmagalur, Homestays In Coorg, Homestays In Sakleshpur,
          Homestays In Goa, Homestays In Ooty, Homestays In Darjeeling,
          Homestays In Manali, Homestays In Munnar, Homestays In Wayanad,
          Homestays In Bengaluru, Homestays In Kasauli, Homestays In Kodaikanal,
          Homestays In Shimla, Homestays In Mysore, Homestays In Dandeli,
          Homestays In Dehradun, Homestays In Gokarna, Homestays In Mussoorie,
          Homestays In Nainital, Homestays In Rishikesh, Homestays In Vagamon,
          Homestays In Alibaug, Homestays In Kalimpong, Homestays In Mangalore,
          Homestays In Pondicherry, Homestays In Yercaud, Homestays In Coonoor,
          Homestays In Kabini, Homestays In Kasol, Homestays In Kurseong,
          Homestays In Mukteshwar <br />
          <br />
          <b>CORPORATE TRAVEL</b>
          <br />
          <br /> Corporate Travel, Corporate Hotel Booking, Corporate Flight
          Booking, Business Travel for SME, GST Invoice for International
          flights, Business Travel Solutions, GST Invoice for Bus, Corporate Bus
          booking, myBiz - Best Business Travel Platform, GST Invoice for
          Flights, GST Invoice for Corporate Travel, GST Invoice for Hotels,
          myBiz for Small Business, Free cancellation on International Flights
          <br />
        </div>
        <br />
        <br />
        <div>
          <div>
            <section>
              <BsTwitter />
              <FaFacebookF />
            </section>
            <section>
              © 2023 BookEase.com PVT. LTD. <br /> Country India USA UAE
            </section>
          </div>
        </div>
      </Footer>
    </>
  );
}
const Footer = styled.div`
  > div:first-child {
    width: 1200px;
    margin: auto;
    font-size: 12px;
    color: #4a4a4a;
  }
  > div:last-child {
    background-color: #010001;
    height: 150px;
    color: white;
    padding: 20px 80px;
    display: flex;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1200px;
      margin: auto;
      > section:first-child {
        display: flex;
        font-size: 32px;
        gap: 40px;
      }
      section {
        text-align: end;
      }
    }
  }
`;
const Div = styled.div`
  width: 1200px;
  margin: auto;
  /* position: absolute;
  top: 1200px;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: white;
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #4a4a4a;
    width: 90%;
  }
`;
const DIV = styled.div`
  background: rgb(19, 68, 120);
  background: linear-gradient(
    0deg,
    rgba(19, 68, 120, 1) 1%,
    rgba(7, 20, 37, 1) 69%
  );
  height: 450px;
  nav {
    width: 1200px;
    margin: auto;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    small {
      color: white;
      font-size: large;
      font-weight: 700;
    }
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
  /* position: absolute;
  top: 700px;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: white;
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  #top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button:first-child {
      background-color: transparent;
      border: 0px;
      padding: 7px;
      font-size: large;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      cursor: pointer;
      border: 1px solid lightgrey;
    }
    button:last-child {
      background-color: transparent;
      border: 0px;
      padding: 7px;
      font-size: large;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      cursor: pointer;
      border: 1px solid lightgrey;
    }
    margin-bottom: 5px;
  }
  h1 {
    color: #443d3d;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    overflow-x: scroll;
    transition: transform 0s ease-in-out;
    will-change: transform;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  div div {
    margin-top: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 450px;
    height: 160px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    gap: 15px;
    hr {
      width: 30px;
      margin-top: 10px;
      margin-bottom: 5px;
      border-top: 1px solid red;
    }
    section {
      display: flex;
      flex-direction: column;
      width: 30%;
    }
    section:nth-child(2) {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
      font-weight: bolder;
      text-align: right;
      color: #008dfe;
    }
  }
`;
