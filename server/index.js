const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { mailRouter } = require("./routes/email.route");
const { hotelRouter } = require("./routes/hotel.route");
const { auth } = require("./middlewares/auth.middleware");
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use('/hotel', hotelRouter)
app.use("/mail", mailRouter);
app.listen(5000, async () => {
    try {
        await connection;
    } catch (error) {
        console.log(error);
    }
});