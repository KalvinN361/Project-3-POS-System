const { Schema, model } = require('mongoose')
const MenuItemSchema = require("./menuItems")


const menucategorySchema = new Schema ({
    name: {
        type: String, 
        required: true, 
    },
    Items: {
        type: [ MenuItemSchema ],
        required: true, 
    },
    date: {
        type: Date, 
        default: Date.now, 
    }
});

module.exports = menucategorySchema;