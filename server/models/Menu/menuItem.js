const { Schema, model } = require('mongoose');

const MenuItemSchema = new Schema ({
    name: {
        type: String, 
        required: true, 
    },
    price: {
        type: Number, 
    },
    // amount of item left in stock 
    inventory: {
        type: Number, 
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = MenuItemSchema