const express = require("express");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const cors = require("cors");
const { mailRouter } = require("./routes/email.route");
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/mail", mailRouter);
app.use(
    cookieSession({
        name: "session",
        keys: ['bookEase'],
        maxAge: 24 * 60 * 60 * 100
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.listen(5000, async () => {
    try {
        await connection;
    } catch (error) {
        console.log(error);
    }
});