# User Sign-Up Form

A user-friendly sign-up application built using Node.js, Express.js, EJS, and MongoDB. This application allows users to register by providing their name, email, and password. The password is securely hashed using bcryptjs before being stored in the database.

## Features

* **User Registration**: Users can sign up by providing their name, email, and password.
* **Password Hashing**: Passwords are hashed using bcryptjs for secure storage.
* **Data Validation**: Input data is validated using express-validator to ensure data integrity.
* **Structured Codebase**: Utilizes MVC architecture for organized and maintainable code.
* **Responsive Design**: The user interface is designed to be responsive and user-friendly.

## Technologies Used

* **Node.js**: JavaScript runtime for building the server-side application.
* **Express.js**: Web framework for Node.js to handle routing and middleware.
* **EJS**: Templating engine for rendering dynamic HTML pages.
* **MongoDB**: NoSQL database for storing user data.
* **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
* **bcryptjs**: Library to hash passwords securely.
* **express-validator**: Middleware for validating and sanitizing user input.
* **cors**: Middleware to enable Cross-Origin Request Sharing.
* **body-parser**: Middleware to parse incoming request bodies.
* **morgan**: HTTP request logger middleware for Node.js.
* **nodemon**: Utility that monitors for changes in files and automatically restarts the server.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/liton-das/user-signUp-from.git
   ```

2. Navigate into the project directory:

   ```bash
   cd user-signUp-from
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   * Create a `.env` file in the root directory.
   * Add the following environment variables:

     ```
     PORT=3000
     DB_URI=mongodb://localhost:27017/userdb
     ```

5. Start the application:

   ```bash
   npm start
   ```

   Alternatively, for development mode with automatic restarts:

   ```bash
   npm run dev
   ```

## Usage

* Open your browser and navigate to `http://localhost:3000`.
* You will be presented with a sign-up form.
* Fill in the required fields and submit the form to register a new user.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README further based on any additional features or information you'd like to include.
