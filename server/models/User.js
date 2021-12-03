const { Schema, model} = require('mongoose');
const bycrypt = require ('bcrypt');

const orderSchema = require('./Order')

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true,
        lastLogin: {
            type: Boolean, 
            defaule: false
        }
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        match: [/.+@.+\..+/, "Please enter a valid email address!!"],
    },
    password: {
        type: String, 
        require: true, 
        minlength: 6,
    },

    // set savedOrder to be an array
    savedOrder: [orderSchema],
},
{
    toJSON: {
        virtuals: true, 
    },  
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds= 10; 
        this.password = await bycrypt.hash(this.password, saltRounds)
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bycrypt.compare(password, this.password);
};
userSchema.virtual('orderCount').get(function () {
    return this.savedOrder.length;
});

const User = model('User, userSchema')

module.export = User; 

// done 