const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
})

model.export = menuItems = mongoose.model('Description', description);