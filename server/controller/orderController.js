'use strict';

const mongoose = require('mongoose'),
OrderModel = mongoose.model('Orders');

let createOrder = function(req, res) {
    OrderModel.findOne({ userName: req.body.username })
    .then((orderList) => {
        if(orderList !== null) {
            throw new Error("Username is already in use!");
    } else {
        if (!req.body.username || !req.body.orderList)
            throw new Error ('wrong username')
        newOrderList = {
            username: req.body.username, 
            orderList: req.body.orderList,
        }
        var newOrder = new OrderModel(newOrderList)
        newOrder.save()
            .then((order) => {
                res.json(order);
            })
    }
})
    .catch((err) => {
        res.status(400).send(err);
    })
};

let removeOrderList = function(req, res) {
    OrderModel.deleteOne({
        userName: req.body.username
    })
    .then((order) => {
        if (order.deletedCount === 0)
            throw new Error ('wrong username')
        else 
            res.json({ message: "Order Deleted"});
    })
    .catch((err) => {
        res.status(400).send(err);
    });
}

let listOrder = function(req, res) {
    OrderModel.find({})
    .then((order) => {
        if(order.length > 0) 
            res.json(order);
        else    
            throw new Error('There are currently no orders')
    })
    .cathc((err) => {
        res.status(400).send(err);
    })
}