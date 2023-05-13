# product
The code provides a simple RESTful API for storing, retrieving, and updating products. It uses a MongoDB database to store product data and has four files:

1. `app.js` - contains the basic server functionalities, such as starting the server and JSON formatting.
2. `model.js` - defines the product model, which includes `name`, `description`, and `price`.
3. `control.js` - contains functions to retrieve a product by ID, update its price, and add a new product to the database, as well as basic error handling.
4. `routes.js` - contains the routes to handle these functions.

To use the API, send requests to the appropriate endpoint using HTTP methods such as GET, POST, and PATCH. The API will respond with the requested data or an appropriate error message. The API can be tested using tools such as Postman.
