const { Schema, model } = require('mongoose')

const BillSchema = require('./Bill');

const tableSchema = new Schema ({
    number: {
        type: Number,
    }, 
    Bill: BillSchema, 

    status: {
        type: String, 
        requiered: true, 
        default: 'open'
    },
    capacity: {
        type: Number, 
        required: false, 
        default: 4
    },
    dateUpdated: {
        type: Date, 
        default: Date.now
    }
});
module.exports = tableSchema;