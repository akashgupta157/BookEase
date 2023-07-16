import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { url } from "../components/url";
import { CircularProgress } from "@mui/material";
export const SingleHotelPage = () => {
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const getHotel = async () => {
    setLoading(true);
    await axios
      .get(`${url}/hotel/${param.id}`)
      .then((res) => setData(res.data));
    setLoading(false);
  };
  useEffect(() => {
    getHotel();
  }, [param]);
  return (
    <Div>
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
      ) : null}
    </Div>
  );
};
const Div = styled.div``;
