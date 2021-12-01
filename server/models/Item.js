const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItems = new Schema({
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
  },
  category: {
    type: String,
  },
  images: {
    name: String,
    desc: String,
    image:
    {
    data: Buffer,
    contentType: String,
    }
  },
});

// model.export = menuItems = mongoose.model('Menu', menuItems);