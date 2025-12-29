import * as Yup from 'yup';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import authConfig from './../../config/auth.js'

class SessionController 
   async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

     const isValid = await schema.isValid(request.body, { 
      abortEarly: false,
      strict: true 
    })

      const emailOrPasswordIsIncorrect = () => { 
     return response
     .status(400)
     .json({ error: 'Email or password incorrect.' });

    const emailOrPasswordIsIncorrect = () => {
    return response.status(400).json({ error: 'Email or password incorrect.' });

    };

     if (!isValid){
    return  emailOrPasswordIsIncorrect();
     }

       const { email, password } = request.body;

        const existingUser = await User.findOne({ 
          where: { 
            email,
          } 
        });

    if (!existingUser) {
    return  emailOrPasswordIsIncorrect();
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password_hash,
  );

  if (!isPasswordCorrect) {
     return  emailOrPasswordIsIncorrect();
    }
        
     const token = jwt.sign({ id:  existingUser.id}, authConfig.secret, {

     }) 
    
     return response.status(200).json({
    id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      admin: existingUser.admin,
 });
   }
} 

export default new SessionController();
