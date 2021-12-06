const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

const items = require("./routes/items");
const orders = require("./routes/orders");
const orderDetails = require("./routes/orderItem");
const users = require("./routes/users");

const conn =  mongoose.createConnection(process.env.MONGO_URI);
const stripe = require('str')('STRIPE_PUB');


require("./passport")(passport);

// new express instance
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

app.use("/api/v1/items", items);
app.use("/api/v1/orders", orders);
app.use("/api/v1/order-details", orderDetails);
app.use("/api/v1/users", users);

try {
    await mongoose.connect('MONGO_URI');
} catch (error) {
    handleError(error);
}

module.exports = app;