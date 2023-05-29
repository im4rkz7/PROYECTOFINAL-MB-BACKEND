import {userService} from "../service/userService.js";
import { WSresponse } from "../libs/WSresponse.js";

const createUser = async (req, res) => {
  try {
    const response = userService.createUser(req.body);

    res.json(new WSresponse(response, "User created"));
  } catch (err) {
    res.json(new WSresponse(null, "Error creating user", err, 500));
  }
};


const getOneUser = async (req, res) => {
  try {
    const filters = { _id: req.params.id };
    const user = await userService.getUserOneByFilter(filters);

    res.json(user);
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

const login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    console.log(token);
    res.json({ token });
    
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    res.sendStatus(500);
  }
};



export const userController = { 
  createUser, 
  getOneUser,
  login
};

