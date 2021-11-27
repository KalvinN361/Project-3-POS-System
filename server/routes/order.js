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

router.post("/", (req, res) => {