const loginSchema = require("../../models/login/login");
const SignupSchema = require('../../models/signup/Signup')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postlogin = async (req, res) => {

   const user = await SignupSchema.find(req.body)
   console.log(user)
   const { email, password } = req.body;
   try {

      const user = await SignupSchema.findOne({ email });
      console.log(user.password)
      if (!user) {
         console.log('User not found')
         return res.status(404).json({ error: 'User not found' });
      }
      const isMatch = await (password === user.password);
      console.log(isMatch);
      if (!isMatch) {
         console.log('password not matched')
         return res.status(401).json({ error: 'password invalid' });
      }
      // const data = await loginSchema.updateOne({ email: user.email }, {
      //    $set: { logindate: new Date() }
      // })
      const rest = new loginSchema(req.body);
      const restsave = await rest.save();
      console.log(restsave)
      return res.status(200).json({ message: `Succesfully` });

   } catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
         // Handle duplicate key error for the email field
         console.error('Duplicate email value:', error.keyValue.email);

         const data = await loginSchema.updateOne({ email: user.email }, {
            $set: { logindate: new Date() }
         })

         res.status(200).json({ message: 'Update login details' });
      } else {
         // Handle other errors
         console.error('Error inserting document:', error);
         res.status(500).json({ message: 'Error inserting document' });
      }
   }

}


module.exports = postlogin;