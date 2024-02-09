const express = require('express');
const postlogin = require('../../controllers/login/login');
const loginRoute = express.Router();

loginRoute.route('/login').post(postlogin);
loginRoute.route('/login').delete(postlogin);
loginRoute.route('/login').put(postlogin);

module.exports = loginRoute;