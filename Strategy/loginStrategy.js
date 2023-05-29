import {Strategy as LocalStrategy}  from 'passport-local'
import logger from "../components/winstonconfig.js"
import {indexController} from '../controller/indexController.js'
import bcrypt from 'bcrypt'
import {User} from '../models/userModels.js'
import {Cart} from '../models/cartModels.js'
import {Order} from '../models/orderModel.js'


function hashPassword(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

function isvalidpassword(reqPassword,dbPassword){
    return bcrypt.compareSync(reqPassword,dbPassword)
}


const registerStrategy = new LocalStrategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      try {

        const existingUser = await User.findOne({ email:username });
   

        if (existingUser) {
          return done(null, null);
        }
      
       const newUser = {
            nickname: req.body.nickname,
            email: req.body.username,
            password: hashPassword(password),
            address: req.body.address,
            avatar: req.body.avatar,
            role:"USER"
        
        
        };
  
        const createdUser = await User.create(newUser);
        req.user = username;
        done(null, createdUser);


        const newCart = {
            userId: req.body.username,
            product: "",
        }
        

        const createCart = await Cart.create(newCart)
        done(null, createCart)

        const newOrder = {
          userId: req.body.username,
          product: "",
          creationDate: Date.now() ,
          status: ""
      }

      const createOrder = await Order.create(newOrder)
      done(null, createOrder)


      } catch (err) {
        console.log("Erro registrando usuario", err);
        done("Erro en registro", null);
      }
    }
  );



const loginStrategy = new LocalStrategy(async (username,password,done)=>{
    try{
        const user = await indexController.accessController.Login({email:username})

        const auxiliar = username



        if(!user || !isvalidpassword(password,user.password)){
            
            return done(null, user)
        }
        done(null,user)

    }catch(error)
    {
        logger.error('server.js error login')
        done('Error login',null)
    }

})

export const loginStrat = {
    registerStrategy,
    loginStrategy,
    logger,
    User
}
   
