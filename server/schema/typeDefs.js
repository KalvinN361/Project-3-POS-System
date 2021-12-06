const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Item {
        _id: ID
        name: String
        price: Number
        photo: Photo
        category: Category
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
        users: [User]
        user(userId: ID!) : User
        orders: [Order]
        order(orderId: ID!): Order
        items: [Item]
        item(itemId: ID!): Item
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addOrder(userId: ID!, name: String!, table: Number!, totalPrice: Number!, description: String!): User
        addItem(name: String!, price: Number!, description: String!, photoId: ID!, categoryId: ID!): Item

        removeUser(userId: ID!): User
        removeOrder(userId: ID!, name: String, table: Number!): User
        removeItem(itemId: ID!): Category
    }
`

module.exports = typeDefs;
