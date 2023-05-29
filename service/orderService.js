const createOrder = async ({ userId, product, creationDate, status}) => {
    const createdOrder = await orderDao.createOrder({ userId, product, creationDate, status  });
  
    return createdOrder
  };

export const orderService = {
    createOrder
}



