const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Item {
        _id: ID
        name: String
        price: Number
        photo: [Photo]
        category: [Category]
        description: String
    }

    type Photo {
        small: String 
        medium: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        order: [Order]
    }

    type Order {
        _id: ID
        name: String
        description: String
        totalPrice: Number
        isPaid: Boolean
        table: Number
        dateAdded: Date


    }
    type Category {
        name: String
        item: [Item]
        date: Date
    }
    type Auth {
        token: ID
        user: User
    }

    type Query {
        user(_id: ID!) : User
        






    }

    type Mutation {








    }
`