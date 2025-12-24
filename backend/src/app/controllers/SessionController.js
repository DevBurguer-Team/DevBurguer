import * as Yup from 'yup';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

class SessionController {
   async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email(6).required(),
      password: Yup.string().required(),
    });

     const isValid = await schema.isValid(request.body, { 
      abortEarly: false,
      strict: true 
    });

       const emailOrPasswordIsIncorrect = () => {
      response.status(400).json({ error: 'Email or password incorrect.' });
    };

     if (!isValid){
      emailOrPasswordIsIncorrect();
     }

       const { email, password } = request.body;

        const existingUser = await User.findOne({ 
          where: { 
            email,
          } 
        });

    if (!existingUser) {
      emailOrPasswordIsIncorrect();
    }

    const isPasswordCorrect = await bcrypt.compare(password,existingUser.password_hash,
  );

  if (!isPasswordCorrect) {
       emailOrPasswordIsIncorrect();
    }

 return response.status(200).json({
    id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      admin: existingUser.admin,
 });
   }
} 

export default new SessionController();