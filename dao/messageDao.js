import {Message} from "../models/messageModel.js";

const createMessage = async (messageToCreate) => {
    const createdMessage = await Message.create(messageToCreate);
    return createdMessage;
  };

  const readMessage = async () => {
    const Message = await Message.find();
    return Message;
  };


export const messageDao = { createMessage, readMessage };




