# Express MongoDB API

A RESTful API built with Express.js and MongoDB (Mongoose) for managing users and products.

## Project Structure

```
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── userController.js
│   │   └── productController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── productRoutes.js
│   ├── scripts/
│   │   ├── initDb.js
│   │   └── testCrud.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   DB_USERNAME=your_mongodb_username
   DB_PASS=your_mongodb_password
   PORT=5000 (optional)
   ```
4. Initialize the database (optional):
   ```
   node src/scripts/initDb.js
   ```
   To reset and re-seed the database:
   ```
   node src/scripts/initDb.js --reset
   ```
5. Test CRUD operations (optional):
   ```
   node src/scripts/testCrud.js
   ```
6. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

### Users

- `GET /api/users` - Get all users (supports `?search=query` parameter for text search)
- `GET /api/users/search?q=query` - Search users with full-text search
  - Query parameters:
    - `q` - Search query (required)
    - `limit` - Number of results per page (default: 10)
    - `page` - Page number (default: 1)
- `GET /api/users/:id` - Get a single user
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### Products

- `GET /api/products` - Get all products (supports `?search=query` parameter for text search)
- `GET /api/products/search?q=query` - Search products with full-text search
  - Query parameters:
    - `q` - Search query (required)
    - `category` - Filter by category (optional)
    - `minPrice` - Minimum price filter (optional)
    - `maxPrice` - Maximum price filter (optional)
    - `limit` - Number of results per page (default: 10)
    - `page` - Page number (default: 1)
- `GET /api/products/:id` - Get a single product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## User Schema

```json
{
  "name": "String (required)",
  "email": "String (required, unique)",
  "phone": "String",
  "address": "String"
}
```

## Product Schema

```json
{
  "name": "String (required)",
  "description": "String (required)",
  "price": "Number (required)",
  "category": "String (required)",
  "inStock": "Boolean (default: true)",
  "quantity": "Number (default: 0)",
  "imageUrl": "String"
}
```

## Database and Collections

This project uses MongoDB as its database. When the application starts, it automatically:

1. Connects to the MongoDB database using the credentials in the `.env` file
2. Creates the following collections if they don't exist:
   - `users` - Stores user information
   - `products` - Stores product information
3. Creates text indexes for full-text search functionality:
   - User collection: Text index on `name`, `email`, and `address` fields
   - Product collection: Text index on `name`, `description`, and `category` fields

You can initialize the database with sample data using the provided script:
```
node src/scripts/initDb.js
```

## Testing CRUD Operations

A test script is provided to verify that all CRUD operations work correctly:
```
node src/scripts/testCrud.js
```

This script will:
1. Create test records in both collections
2. Read the records to verify they were created
3. Update the records with new information
4. Delete the test records

The script outputs detailed information about each operation for debugging purposes.

## Testing Search Functionality

A test script is provided to verify the full-text search functionality:
```
node src/scripts/testSearch.js
```

This script will:
1. Create test data with searchable content
2. Perform various text searches on users and products
3. Demonstrate filtering and sorting by relevance
4. Clean up the test data

The script outputs detailed information about each search operation for debugging purposes.
