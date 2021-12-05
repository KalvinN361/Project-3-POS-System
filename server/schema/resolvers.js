const {
        Items, Order, User
} = require("../models");
const mongoose = require('mongoose')
const {
    signToken
} = require('../utils/auth')
const {
    AuthentificationError
} = require('apollo-server-express');

// resolvers
const resolvers = {
    Query: {
        items: async () => {
            return await Items.find({})
        },
        user: async (parent, args, context) => {
            const user = await User.findOne(args.id).populate('Order')

            if (!user) {
                throw new AuthentificationError('Please log in with a valid user')
            }
            return user; 
        },    

}
}
