const { Schema } = require('mongoose');

const orderSchema = new Schema ({
    orderItem: [{
        name : {type: String, required: true}, 
        quantity: {type: Number, required: true},
        price: {type: Number, required: true},
        img: { type: String }
    }],
    description: {
        type: String, 
        required: true, 
    },
    orderId: {
        type: String, 
        required: true, 
    },
    image: {
        type: String,
    },
    totalPrice: {
        type: Number, 
        required: true, 
        defaule: 0.0,
    }
})

const Order = mongoose.model("Order", orderSchema);

module.export = Order