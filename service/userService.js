import { userDao } from "../dao/userDao.js";
import { User } from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "../utils/jwt.js"
import { json } from "express";


const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const isValidPassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(hashedPassword, plainPassword);
};


const createUser = async (req,res) => {
  const filters = req.username ; 


  const existingUser = await User.findOne({email:filters});
  if (existingUser) {
    return JSON.stringify(new CustomError(false, "Email already in use", true, 400));
      }
      const createdUser = await User.create({
        nickname: req.nickname,
        email: req.username,
        password: req.password,
        address: req.address,
        avatar: req.avatar
      }); 
    return createdUser
      
    };








/***************/
const getUserOneByFilter = async (filters) => {
  const user = await User.findOne(filters);
  return user
}




export const userService = { createUser, getUserOneByFilter }
