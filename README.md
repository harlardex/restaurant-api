
# Restaurant API 

A RESTful API for managing a restaurant system built with Node.js, Express, and MongoDB.

---

# Features

- Create menu items
- Get all menu items
- Update menu items
- Delete menu items
- Filter by category, availiable, status, name
- Manage orders
- MongoDB integration
- Error handling
- Validation using Mongoose

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- nodemon

---

# Project Structure

```bash
restaurant-api/
│
├── models/
├── routes/
├── controllers/
├── .env
├── server.js
├── package.json
└── README.md
```

---

# Installation

## 1. Clone the repository

```bash
git clone <https://github.com/harlardex/restaurant-api.gitl>
```

---

## 2. Navigate into the folder

```bash
cd restaurant-api
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Create a .env file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 5. Start the server

### Development mode

```bash
npm run serve
```

### Production mode

```bash
npm start
```

---

# Database Model

## Menu Schema

```js
import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 3
    },

    price: {
        type: Number,
        required: true,
        min: 1
    },

    category: {
        type: String,
        required: true
    },

    ingredients: [String],

    available: {
        type: Boolean,
        required: true
    }},

    {
        timestamps: true
    }
)

const menuItems = mongoose.model('Menu', menuSchema);
export default menuItems;
```

---

# API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/menu | Get all menu |
| GET | /api/menu/:id | Get single menu |
| POST | /api/menu | Create menu |
| PUT | /api/menu/:id | Update menu |
| DELETE | /api/menu/:id | Delete menu |
| GET | /api/order | Get all order |
| GET | /api/order/:id | Get single order |
| POST | /api/order | Create order |
| PUT | /api/order/:id | Update order |
| DELETE | /api/order/:id | Delete order |

---

# Filter By Category

## Example URL

```http
GET /api/menu?category=Rice
```

---

## Controller Example

```js
const getMenu = async (req, res) => {
  const { category } = req.query;

  const filter = category ? { category } : {};

  const menu = await Menu.find(filter);

  res.json(menu);
};
```

---

# Example Request

## Create Menu Item

```http
POST /api/menu
```

### Body

```json
{
    "name": "Noodles",
	"price": 1800,
	"category": "fast food",
	"ingredients": ["noodles", "Pepper", "Beef"],
	"available": true
}
```

---

# Example Response

```json
{
	"name": "Noodles",
	"price": 1800,
	"category": "fast food",
	"ingredients": [
		"noodles",
		"Pepper",
		"Beef"
	],
	"available": true,
	"_id": "6a0a5245aeca9e12fcc596c9",
	"createdAt": "2026-05-17T23:41:57.326Z",
	"updatedAt": "2026-05-17T23:41:57.326Z",
	"__v": 0
}
```

---

# Scripts

```json
"scripts": {
  "start": "node server.js",
  "serve": "nodemon server.js"
}
```

---

# Author

Developed by Your Femi

---#
