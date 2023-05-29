import { User } from "../models/userModels.js";

const createUser = async (userToCreate) => {
  const createdUser = await User.create({ ...userToCreate, role: "USER" });
  return createdUser;
};

const getUserByMail = async (email) => {
  const user = await User.findById(email);
  return user;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);

  return user;
};

const getUserByPassword = async (password) => {
  const user = await User.findById(password);

  return user;
};


const getUserbyName= async (req) => {
  //console.log("usuario dao",req)
  const username = req
  const user = await UsuarioModel.findOne(username)
  //const ProductoExiste = await CarritoModel.find({ usuarioid: usuarioid})

  //console.log("dao carrito",arrayProductos)
  return user

}

export const userDao = { createUser, getUserByMail, getUserById, getUserByPassword, getUserbyName };
