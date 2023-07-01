import { Box, Modal, Snackbar, SnackbarContent } from "@mui/material";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../components/url";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authReducer/action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  p: 4,
};
const style1 = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export default function AuthModel({ open, onClose }) {
  const [email, setEmail] = useState();
  const [setOTP, setSetOTP] = useState();
  const [otp, setOtp] = useState("");
  const [data, setData] = useState();
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    axios.post(`${url}/user`, { email }).then((res) => {
      setSetOTP(res.data.otp);
      setData(res.data);
      onClose();
      handleOpen1();
    });
  };
  useEffect(() => {
    axios.post(`${url}/mail`, { to: email, otp: setOTP });
  }, [setOTP]);
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  function matchIsNumeric(text) {
    const isNumber = typeof text === "number";
    const isString = typeof text === "string";
    return (isNumber || (isString && text !== "")) && !isNaN(Number(text));
  }
  const validateChar = (value, index) => {
    return matchIsNumeric(value);
  };
  const isOtpValid = otp.length === 6;
  const handleSubmit = () => {
    if (otp === setOTP) {
      dispatch(login(data));
      handleClose1();
    } else {
      setOpenSnackbar(true);
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Div>
            <div>
              <img
                src="https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?cs=srgb&dl=pexels-deva-darshan-1173777.jpg&fm=jpg"
                alt=""
              />
              <section>
                <p>Sign up now to join the club of</p>
                <small>10 crore+ Happy Travellers</small>
              </section>
            </div>
            <div>
              <p>LOGIN / SIGN UP</p>
              <section>
                <form action="" onSubmit={handleForm}>
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <br />
                  <button>CONTINUE</button>
                </form>
                <br />
                <div>
                  <hr />
                  <p>Or Login/Signup With</p>
                  <hr />
                </div>
                <img
                  src="https://i0.wp.com/res.cloudinary.com/ratracegrad/image/upload/v1672512497/Screenshot_2022-12-31_at_1.48.07_PM_zmev88.png?ssl=1"
                  alt=""
                />
              </section>
              <small>
                By proceeding, you agree to BookEase.com's Privacy Policy, User
                Agreement and T&Cs
              </small>
            </div>
          </Div>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <OTP otp={isOtpValid}>
            <h2>Enter Your Verification Code</h2>
            <small>OTP has been send to {email}</small>
            <MuiOtpInput
              value={otp}
              onChange={handleChange}
              length={6}
              validateChar={validateChar}
            />
            <div>
              <button onClick={(e) => setOtp("")}>Clear</button>
              <button disabled={!isOtpValid} onClick={handleSubmit}>
                Verify OTP
              </button>
            </div>
          </OTP>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SnackbarContent
          style={{ backgroundColor: "red" }}
          message="Enter Correct OTP !"
        />
      </Snackbar>
    </>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
  > div:first-child {
    width: 500px;
    img {
      width: 100%;
      height: 500px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      object-fit: cover;
    }
    section {
      position: absolute;
      top: 50%;
      left: 25%;
      transform: translate(-50%, -50%);
      width: 315px;
      border: 1px solid white;
      color: white;
      padding: 20px;
      border-radius: 5px;
      p {
        font-size: 26px;
        font-weight: 900;
      }
      small {
        font-size: 36px;
        font-weight: 900;
      }
    }
  }
  > div:last-child {
    background-color: white;
    width: 600px;
    border-radius: 5px;
    height: 530px;
    padding-top: 50px;
    > p:first-child {
      font-size: 20px;
      font-weight: bolder;
      background: linear-gradient(to left, #0a5fba 1%, #58a1fb 69%);
      width: fit-content;
      margin: auto;
      padding: 9px 15px;
      color: white;
      border-radius: 50px;
    }
    section {
      form {
        width: 80%;
        margin: auto;
        margin-top: 50px;
        label {
          color: #4a4a4a;
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          outline: none;
          border: 1px solid;
          font-size: 16px;
          margin-top: 5px;
          margin-bottom: 20px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #018cfe;
          border-radius: 5px;
          border: 0;
          color: white;
          font-weight: bold;
        }
      }
      div {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: smaller;
        color: #4a4a4a;
        gap: 5px;
        hr {
          width: 28.7%;
          border-bottom: lightgray;
        }
      }
      img {
        display: block;
        margin: auto;
        border: 1px solid lightgray;
        margin-top: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: contain;
        cursor: pointer;
      }
    }
    small {
      display: block;
      margin: auto;
      margin-top: 35%;
      width: 85%;
      font-size: xx-small;
    }
  }
`;
const OTP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  div {
    display: flex;
    gap: 20px;
    button {
      padding: 9px 15px;
      border-radius: 5px;
      border: 0px;
      font-size: medium;
      font-weight: bold;
      color: white;
      background-color: #018cfe;
    }
    button:last-child {
      background-color: ${(props) => (props.otp ? "#018cfe" : "gray")};
    }
  }
`;
