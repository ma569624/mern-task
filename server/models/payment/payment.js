const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true,
    },
    pagevisitdate: {
        type: Date,
        default: new Date()
    },
    status: {
        type: String, // Assuming status is represented as a string
        enum: ['paid', 'pending'], // Example of using an enum for status
        default: 'pending', // Default status
    }
})

module.exports = mongoose.model('payment', paymentSchema);