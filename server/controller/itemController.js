'use strict'; 

const mongoose = require('mongoose');
const ItemModel = mongoose.model("Items");
const multer = require('multer');
const path = require('path');
const fs = rquire('fs');
// upload images for the items
// use multer to upload image

let addItem = function(req, res) {
    let newItem = new ItemModel(req.body)
    let itemImage = {
        contentType: req.file.mimetype, 
        image: req.file.buffer
    }
    newItem.image = itemImage; 
        newItem.save()
}