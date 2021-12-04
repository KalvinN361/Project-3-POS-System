const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Item {
        _id: ID
        name: String
        price: Number
        photo: [Photo]
        category: [Category]
        date: Date
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
`