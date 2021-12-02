const express = require("express");
const util = require("util");
const database = require("../config/database");
const router = express.Router();

router.get("/:id", (req, res) => {
    const itemData = `SELECT d.order_no, d.item_id, d.qty, i.unit_price, i.name
                FROM items i, orders o, order_item_detail d
                WHERE o.order_no = ? 
                AND o.order_no = d.order_no 
                AND i.item_id = d.item_id`;
    database
        .query(itemData, [req.params.id])
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).send({ error: err }));
    // .catch(next);
});
