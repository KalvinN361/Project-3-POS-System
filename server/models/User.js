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
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email address!!"],
    },
    password: {
        type: String, 
        require: true, 
        minlength: 6,
        match: [/^[a-z0-9A-Z]+$/, "Password can only contain alphanumeric characters"],
    },

    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
},);

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

const User = model('User', userSchema);

module.export = User; 

// done 