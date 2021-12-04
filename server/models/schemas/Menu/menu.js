const { Schema, model } = require('mongoose');
const MenuCategorySchema = require("./menuCategory");

const menuSchema = new Schema ({
    name: {
        type: String, 
    },
    Categories: [ MenuCategorySchema ],
    dateUpdated: {
        type: Date, 
        default: Date.now,
    }
});

module.exports = menuSchema