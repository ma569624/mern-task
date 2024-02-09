const loginSchema = require('../models/login/login')
const mail = require('../mailsender/Mail')

const inactive = async () => {

    const userlogin = await loginSchema.find({});
    const currentDate = new Date();

    userlogin.map( async (user) => {
        const { email, logindate } = user; // Destructure email property from each document
        const lastLoginDate = new Date(logindate); // Convert string to Date object

        // Calculate the difference in milliseconds
        const timeDifference = currentDate.getTime() - lastLoginDate.getTime();

        // Convert milliseconds to days
        const daysSinceLastLogin = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        //send mail if user not active since five days
        if (daysSinceLastLogin === 5) {
            await mail(email);
        }
    });
}

module.exports = inactive