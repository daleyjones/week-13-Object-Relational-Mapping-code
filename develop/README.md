## E-Commerce Back End with ORM
This is an e-commerce back-end application that utilizes an Object-Relational Mapping (ORM) to interact with a MySQL database. It provides a set of API routes for managing products, categories, and tags, allowing users to perform CRUD operations (Create, Read, Update, Delete) on the database.

## Table of Contents
 *  Installation
*  Usage
* Configuration
* API Routes
* Technologies
* Contributing
* License
# Installation
  To run this application locally, you need to have Node.js and MySQL installed on your machine. Follow these steps to get started:

1. Clone this repository to your local machine.

2. Navigate to the project's root directory in your terminal.

3. Run the following command to install the required dependencies:

4. npm install

5. Create a .env file in the root directory and provide the necessary environment variables (see Configuration section for details).

6. Open your MySQL client and create a new database for the application.

7. Update the config/connection.js file with your MySQL database credentials.

# Usage
1. To start the application, follow these steps:

2. In the terminal, navigate to the project's root directory.

3. Run the following command:

4. npm start

5. The application will now start running, and you can test the API routes using an API testing tool like Postman or Insomnia.

# Configuration
The application requires the following environment variables in the .env file:


DB_NAME='ecommerce_db'

DB_USER='root'

DB_PASSWORD=''


# API Routes
The application provides the following API routes:


* GET /api/products: Get all products.
* GET /api/products/:id: Get a single product by ID.
* POST /api/products: Create a new product.
* PUT /api/products/:id: Update a product by ID.
* DELETE /api/products/:id: Delete a product by ID.
* GET /api/categories: Get all categories.
* GET /api/categories/:id: Get a single category by ID.
* POST /api/categories: Create a new category.
* PUT /api/categories/:id: Update a category by ID.
* DELETE /api/categories/:id: Delete a category by ID.
* GET /api/tags: Get all tags.
* GET /api/tags/:id: Get a single tag by ID.
* POST /api/tags: Create a new tag.
* PUT /api/tags/:id: Update a tag by ID.
* DELETE /api/tags/:id: Delete a tag by ID.
# Technologies
The e-commerce back end application utilizes the following technologies:

* Node.js
* Express.js
*MySQL
* Sequelize (ORM)
# Contributing
Contributions to this project are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request.

# Walkthrough video
[      ]
# License
This project is licensed under the MIT License.


Thank you for checking out this e-commerce back-end application. If you have any questions, feel free to reach out. [https://github.com/daleyjones]