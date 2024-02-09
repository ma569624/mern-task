
const mail = require('../mailsender/Mail');
const paymentSchema = require('../models/payment/payment');

const unpaid = async () => {

    const unpaid = await paymentSchema.find({});

    unpaid.map( async (user) => {
        const { email, status, pagevisitdate } = user; // Destructure email property from each document
    
        if (status === 'pending') {
            await mail(email);
            // console.log("send mail that checkout but not processed", { email, status, pagevisitdate });
        }
    });
}

module.exports = unpaid