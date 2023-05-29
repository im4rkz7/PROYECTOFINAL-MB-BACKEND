import {Order} from "../models/orderModel.js";

const createOrder = async (orderToCreate) => {
    const createdOrder = await Order.create(orderToCreate);
    return createdOrder;
  };

export const orderDao = { createOrder };



