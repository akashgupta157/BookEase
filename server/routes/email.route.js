const express = require("express");
const mailRouter = express.Router();
const nodemailer = require("nodemailer");
mailRouter.post('/', async (req, res) => {
    const { to, otp } = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'bookease401@gmail.com',
            pass: 'ikmqozsugmykwoqe'
        }
    });
    const mailOptions = {
        from: 'bookease401@gmail.com',
        to: to,
        subject: "OTP verification from BookEase.com",
        html: `
        <p>Hi,</p>
        <p>Your OTP is: <strong>${otp}</strong></p>
        <p>Please use this OTP to complete your verification process.</p>
        <p>Note: This OTP is valid for a single use and will expire after a certain period of time.</p>
        <p>If you didn't request this OTP, please ignore this email.</p>
        <p>Regards,</p>
        <p>BookEase.com</p>
      `,
    }
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
})
module.exports = {
    mailRouter,
};