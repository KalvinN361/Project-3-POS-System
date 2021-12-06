const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

model.export = menuItems = mongoose.model('Menu', menuItems);