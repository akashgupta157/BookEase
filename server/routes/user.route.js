const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
userRouter.post('/', async (req, res) => {
    const { email } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "BookEase", {
                expiresIn: "7d",
            });
            function generateOTP() {
                const otp = Math.random().toString().substr(2, 6);
                return otp;
            }
            const otp = generateOTP()
            return res.json({ token, existingUser, status: "old", otp });
        }
        const newUser = new UserModel({ email })
        await newUser.save()
        function generateOTP() {
            const otp = Math.random().toString().substr(2, 6);
            return otp;
        }
        const otp = generateOTP()
        const token = jwt.sign({ userId: newUser._id }, "BookEase", {
            expiresIn: "7d",
        });
        res.json({ token, newUser, status: "new", otp })
    } catch (error) {
        res.json({ error: error.message });
    }
})
module.exports = {
    userRouter,
};