import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { url } from "../components/url";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
`;

const HotelForm = () => {
  const [hotel, setHotel] = useState({
    name: "",
    city: "",
    location: "",
    description: "",
    price: "",
    rating: "",
    images: ["", "", "", "", ""],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...hotel.images];
    newImages[index] = e.target.value;
    setHotel({ ...hotel, images: newImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${url}/hotel/createHotel`, hotel);
    setHotel({
      name: "",
      city: "",
      location: "",
      description: "",
      price: "",
      rating: "",
      images: ["", "", "", "", ""],
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={hotel.name}
          onChange={handleInputChange}
        />

        <Label>City:</Label>
        <Input
          type="text"
          name="city"
          value={hotel.city}
          onChange={handleInputChange}
        />

        <Label>Location:</Label>
        <Input
          type="text"
          name="location"
          value={hotel.location}
          onChange={handleInputChange}
        />

        <Label>Description:</Label>
        <Input
          type="text"
          name="description"
          value={hotel.description}
          onChange={handleInputChange}
        />

        <Label>Price:</Label>
        <Input
          type="text"
          name="price"
          value={hotel.price}
          onChange={handleInputChange}
        />

        <Label>Rating:</Label>
        <Input
          type="text"
          name="rating"
          value={hotel.rating}
          onChange={handleInputChange}
        />

        <Label>Image URLs (up to 5):</Label>
        {hotel.images.map((image, index) => (
          <Input
            key={index}
            type="text"
            name={`image${index}`}
            value={image}
            onChange={(e) => handleImageChange(e, index)}
          />
        ))}

        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default HotelForm;
