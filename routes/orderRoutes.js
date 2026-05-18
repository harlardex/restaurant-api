import express from 'express';
import order from '../models/Order.js';
import menuItems from '../models/MenuItems.js';
import { createOrder, deleteOrder, filter, getAllOrder, getOrderById, updateOrder} from '../controller/orderController.js';

const orderRoute = express.Router()

orderRoute.post('/', createOrder);
orderRoute.get('/', filter);
orderRoute.get('/', getAllOrder);
orderRoute.get('/:id', getOrderById);
orderRoute.put('/:id', updateOrder);
orderRoute.delete('/:id', deleteOrder)



export default orderRoute;