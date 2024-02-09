const inactive = require("../filters/Inactive");
const Cron = require('node-cron');
const unpaid = require("../filters/unpaid");

function taskschedular() {
    Cron.schedule('0 0 * * *', () => {
        console.log('Running tasks at midnight');

        //send mail for all inactive user last 5 days
        inactive();

        //send mail for unpaid users
        unpaid()
        
        
    })
}

module.exports = taskschedular;