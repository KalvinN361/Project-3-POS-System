import decode from 'jwt=decode';

class AuthService {

    login(tokenId) {
        // save user token to local storage
        login(tokenId) {
            localStorage.setItem('id_token', tokenId);
            windows.location.assign('/login')
        }
        logout() {
            localStorage.removeItem('id_token');
            window.location.assign('/');
        }
    
}

// const jwt = require('jsonwebtoken');

// const secret = 'mysecretssshhhhhhh';
// const expiration = '2h';

// module.exports = {
//     signToken: function ({ email, username, _id }) {
//     const payload = { email, username, _id };
//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//     },
// };
