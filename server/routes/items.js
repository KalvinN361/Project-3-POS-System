const express = require("express");
const database = require("../config/database");
const router = express.Router();

// get route with error 
router.get("/", (req, res) => {
    database
        .query("SELECT * FROM items")
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).send({ error: err }));
});


// get item by id 
router.get("/:id", (req, res) => {
    database
        .query("SELECT * FROM items WHERE item_id = ?", [req.params.id])
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).send({ error: err }));
});

module.exports = router;