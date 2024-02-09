const express = require('express');
const app = express()
const cors = require('cors')
require('dotenv').config();
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 5000;
const connectDB = require('./database/Database')
const Cron = require('node-cron');
const mailsender = require('./mailsender/Mail');
const inactive = require('./filters/Inactive');
const signupRoute = require('./routes/Signup/signup');
const loginRoute = require('./routes/login/login');
const taskschedular = require('./schedular/taskschedular');
const PaymentRoute = require('./routes/payment/payment');
const unpaid = require('./filters/unpaid');
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    // res.json('Server is running')
    res.status(200).json([{ name: "ramu", price: 200 }, { name: "ramu", price: 200 }, { name: "ramu", price: 200 }])
})

app.post('/form', async (req, res) => {
    const data = req.body;

    const formData = req.body;

    // res.status(200).json("data is add", data);
    console.log(req.body)
    res.status(200).json(formData);
})

app.use("/api", signupRoute)
app.use("/api", loginRoute)
app.use("/api", PaymentRoute)

const start = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log('server is running');
    })
}
const mail = require('./mailsender/Mail')

taskschedular();
// mail("raja");
start()
