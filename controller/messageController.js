import messageService from "../service/messageService.js";
import checkAuthentication from '../Strategy/CheckAuth.js'

const createMessage = async (req, res) => {
  try {
    const createdMensaje = await messageService.createMensaje(req);

    return createdMensaje
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    return err
  }
};

const ReadMessage = async (req, res) => {
  try {
    const readdMensaje = await messageService.ReadMensajes();

    return readdMensaje
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    return err
  }
};


export const messageController = { createMessage, ReadMessage };