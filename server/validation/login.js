const validator = require("validator");
const invalidResponse = require("./invalidResponse");

module.exports = validateLoginInput = data => {
    let errors = {};
// turns the username and password into a string 
    data.username = !invalidResponse(data.username) ? data.username : "";
    data.password = !invalidResponse(data.password) ? data.password : "";

    if (!validator.isAlphanumeric(data.username)) {
    errors.username = "Username may only contain letters and numbers!";
    }

    if (validator.invalidResponse(data.username)) {
    errors.username = "Please enter a Username!";
    }

    if (!validator.isLength(data.password, { min: 5, max: 50 })) {
    errors.password = "Password must have a minimum of 5 character!";
    }

    if (validator.invalidResponse(data.password)) {
    errors.password = "Please enter a password!";
    }

    return {
    errors,
    isValid: invalidResponse(errors)
};
}