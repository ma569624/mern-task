const loginSchema = require("../../models/login/login");
const SignupSchema = require('../../models/signup/Signup')
const paymentSchema = require('../../models/payment/payment')

const postpayment = async (req, res) => {

  // const user = await paymentSchema.find(req.body)
  console.log(req.body)
  const { email } = req.body;
  try {

    const user = await paymentSchema.findOne({ email });
    console.log(user)
    if (!user) {
      // console.log("data is not exits")
      const data = new paymentSchema(req.body);
      let result = await data.save();
      console.log(result)
      return res.status(200).json({ message: 'Visit checkout succesfully' });
    }
    const result = await paymentSchema.updateOne({ email: user.email },
      {
        $set: { pagevisitdate: new Date() }
      }
    )
    console.log(result)

    return res.status(200).json({ message: `login Succesfully` });

  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      // Handle duplicate key error for the email field
      console.error('Duplicate email value:', error.keyValue.email);
      
      res.status(401).json({message: 'Duplicate email'});
    } else {
      // Handle other errors
      console.error('Error inserting document:', error);
      res.status(500).json({message : 'Error inserting document'});
    }
  }

}

const visitcheckout = async (req, res) => {

  const email = req.body;
  // console.log(email);
  const result = await paymentSchema.updateMany(email,
    {
      $set: { status: 'paid' }
    }
  )
  console.log(result)

  return res.status(200).json({ message: `login Succesfully` });

  res.status(200).json({ message: `checkout Succesfully ${req.body}` });
}



module.exports = { postpayment, visitcheckout };