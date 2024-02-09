const express = require('express');
const { postpayment, visitcheckout } = require('../../controllers/payment/payment');

const PaymentRoute = express.Router();

PaymentRoute.route('/checkout').post(postpayment);

PaymentRoute.route('/checkout').put(visitcheckout);

module.exports = PaymentRoute;