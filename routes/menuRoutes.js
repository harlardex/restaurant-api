import express from 'express';
import menuItems from '../models/MenuItems.js';
import { createMenu, deleteMenu, filter, getMenu, getMenuById, updateMenu } from '../controller/menuController.js';

const menuRoute = express.Router();

menuRoute.post('/', createMenu);
menuRoute.get('/', filter)
menuRoute.get('/', getMenu);
menuRoute.get('/:id', getMenuById);
menuRoute.put('/:id', updateMenu);
menuRoute.delete('/:id', deleteMenu);



export default menuRoute;