// user routes

const express = require("express");
const database = require("../config/database");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateLoginInput = require("../validation/login");
// login post
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;

    // determing if user data is in database and if not returns error 404 and txt msg
database
    .query("SELECT * FROM user WHERE username = ?", [username])
    .then(user => {
        if (user.length < 1) {
            errors.username = "User not found";
        return res.status(404).json(errors);
    }
    bcrypt.compare(password, user[0].password).then(same => {
        if (same) {
            const payload = {
                id: user[0].id,
                name: user[0].name
        };