const express = require("express");
const database = require("../config/database");
const router = express.Router();
// grabs data and uses DESC to sort from highest value to lowest value order id 
router.get("/", (req, res) => {
    database
        .query("SELECT * FROM orders WHERE is_open = true ORDER BY created_at DESC")
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).send({ error: err }));
});
// post route that will create a timestamp and insert it into the orders table. error handling also. 
router.post("/", (req, res) => {
    const timestamp = new data().getTime()

    database 
        .query(
            "INSERT INTO orders(is_open, total_price, created_at) VALUES (?,?,?)"
        [1, 0.0, timestamp]
        )
        .then(data => res.status(201).json(data.insertId))
        .catch(err => res.status(500).send({ error: err }));
});
