const express = require('express');
const Hotel = require('../models/hotel.model');
const hotelRouter = express.Router();
hotelRouter.post('/createHotel', async (req, res) => {
    try {
        const hotel = await Hotel.create(req.body);
        res.json(hotel);
    } catch (error) {
        res.json({ error: 'Internal server error' });
    }
});
hotelRouter.get('/:city', async (req, res) => {
    const { city } = req.params;
    try {
        const hotels = await Hotel.find({ city });
        res.json(hotels);
    } catch (error) {
        res.json({ error: 'Internal server error' });
    }
});
module.exports = hotelRouter