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
hotelRouter.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ error: 'Hotel not found' });
        }
        res.json(hotel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
hotelRouter.get('/city', async (req, res) => {
    const { city, sortBy, searchQuery } = req.query;
    try {
        let query = { city };
        if (searchQuery) {
            const searchRegex = new RegExp(searchQuery, 'i');
            query = {
                ...query,
                $or: [
                    { name: { $regex: searchRegex } },
                    { location: { $regex: searchRegex } },
                ],
            };
        }
        let hotels = await Hotel.find(query);
        if (sortBy === 'price_asc') {
            hotels = hotels.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price_desc') {
            hotels = hotels.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rate_desc') {
            hotels = hotels.sort((a, b) => b.rating - a.rating);
        } else {
            hotels
        }
        res.json(hotels);
    } catch (error) {
        res.json({ error: 'Internal server error' });
    }
});

module.exports = { hotelRouter }