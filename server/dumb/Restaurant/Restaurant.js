const { Schema, model } = require('mongoose')
const menuSchema = require('../../Menu')
const billSchema = require('./Bill')
const tableSchema = require('./Table')


const restaurantSchema = new Schema({
    name: {
        type: String, 
        requiered: true,
    },
    Menu: [menuSchema],
    
    Tables: [tableSchema],

    Receipts: [billSchema],

    location: {
        type: String,
    },
    hours: {
        type: [String]
    },
    dateUpdated: {
        type: Date, 
        default: Date.now
    }
})

const Restaurant = mongoose.model("Resteraunt", restaurantSchema);

module.exports = Resteraunt