const express = require('express');
const signupRoute = express.Router();
const postSign = require('../../controllers/signup/Signup');

signupRoute.route('/signup').post(postSign);
signupRoute.route('/signup').delete(postSign);
signupRoute.route('/signup').put(postSign);

module.exports = signupRoute;