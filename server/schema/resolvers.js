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
            const user = await User.findOne(args.userId).populate('order')

            if (!user) {
                throw new AuthentificationError('Please log in with a valid user')
            }
            return user;
        },
        

    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }


}
