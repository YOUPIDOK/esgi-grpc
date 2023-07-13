require('dotenv').config();

const jsonwebtoken = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
const token = jsonwebtoken.sign({}, secretKey);

console.log('Token : ' + token);