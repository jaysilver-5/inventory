# Inventory Management App

This is a simple inventory management application built using Node.js, Express.js, and MongoDB. It allows users to manage categories and items in their inventory.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features
- CRUD Operations: Users can perform CRUD (Create, Read, Update, Delete) operations on categories and items.
- Modular Structure: The application is structured in a modular way, making it easy to understand and maintain.
- Database Integration: It uses MongoDB as the database to store inventory data.
- RESTful API: The application provides a RESTful API for interacting with categories and items.

## Installation
To run this application locally, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/jaysilver-5/inventory.git
2. Navigate to the project directory:
    ```bash
    cd inventory-management-app

3. Install the dependencies:
    ```bash
    npm install

4. Start the server:
    ```bash
    npm start

The server should now be running on http://localhost:3000.

# Usage

Once the server is running, you can use tools like Postman or cURL to interact with the API endpoints.

## Categories

- **Create a Category**: Send a POST request to `/categories` with JSON data containing the name and description of the category.
- **Read Categories**: Send a GET request to `/categories` to retrieve all categories.
- **Update a Category**: Send a PUT request to `/categories/:categoryId` with JSON data containing the updated name and description.
- **Delete a Category**: Send a DELETE request to `/categories/:categoryId`.

## Items

- **Create an Item**: Send a POST request to `/items` with JSON data containing the name, description, categoryId, price, and quantity of the item.
- **Read Items**: Send a GET request to `/items` to retrieve all items.
- **Update an Item**: Send a PUT request to `/items/:itemId` with JSON data containing the updated name, description, categoryId, price, and quantity.
- **Delete an Item**: Send a DELETE request to `/items/:itemId`.


## Folder Structure
The project has the following folder structure:

- app/
  - models/
    - category.js
    - item.js
  - routes/
    - categories.js
    - items.js
  - db.js
  - server.js
  - package.json

# Project Structure

- `models/`: Contains the Mongoose models for categories and items.
- `routes/`: Contains route handlers for categories and items.
- `db.js`: Handles the database connection setup.
- `server.js`: Sets up the Express server and defines routes.
- `package.json`

## Dependencies

- **Express.js**: A minimalist web framework for Node.js.
- **Mongoose**: A MongoDB object modeling tool.
- **Body-parser**: Middleware to parse JSON request bodies.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the MIT License.
