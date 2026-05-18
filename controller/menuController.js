import menuItems from "../models/MenuItems.js";


export const createMenu = async (req, res) => {
    try {
        const menu = await menuItems.create(req.body);
        res.status(200).json(menu)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const filter = async (req, res) => {
    try {
        const {category, available} = req.query;
        const filter = {}
        if(category){
            filter.category = { $regex: category, $options: "i"};
        }
        if(available){
            filter.available = available;
        }
        const menu = await menuItems.find(filter);
        res.status(200).json(menu)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getMenu = async (req, res) => {
    try {
        const menu = await menuItems.find({});
        res.status(200).json(menu)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getMenuById = async (req, res) => {
    try {
        const {id} = req.params;
        const menu = await menuItems.findById(id);
        res.status(200).json(menu)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateMenu = async (req, res) => {
    try {
        const {id} = req.params;
        const menu = await menuItems.findByIdAndUpdate(id, req.body);
        if(!menu) {
           return res.status(404).json({message: 'Menu not found'})
        }
        const updatedMenu = await menuItems.findById(id);
        res.status(200).json(updatedMenu)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const deleteMenu = async (req, res) => {
    try {
        const {id} = req.params;
        const menu = await menuItems.findByIdAndDelete(id);
        if(!menu) {
           return res.status(404).json({message: 'Menu not found'})
        }
        res.status(200).json({message: 'Menu have been deleted successfully'})
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}