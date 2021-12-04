const { Schema, model } = require('mongoose')

const BillSchema = new Schema({
    // Paid or not
    isPaid: {
        type: Boolean,
        required: false,
        default: false
    },
    // Total $ amount the bill is for (after tax)
    amountCharged: {
        type: Number,
        required: true,
        default: 0.00
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    // Date that the document was created or last updated
    dateUpdated: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = BillSchema;