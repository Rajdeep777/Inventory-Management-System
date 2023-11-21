# Inventory-Management-System

## Description

This is a backend project built with Node.js and Express.js, incorporating authentication, cookie parsing, session management, Express.js layout, and Multer for handling file uploads.

![Register Page](https://github.com/Rajdeep777/Inventory-Management-System/assets/74129008/4a57ab7f-3dd4-439a-bca6-d3f554fe6a02)

![Login Page](https://github.com/Rajdeep777/Inventory-Management-System/assets/74129008/9c321674-b4fd-4c04-9c96-22730c8b746e)

![Product Page](https://github.com/Rajdeep777/Inventory-Management-System/assets/74129008/f1b34f2c-8d4f-4f2f-84ca-df8d0d85f1e3)

![Add Product Page](https://github.com/Rajdeep777/Inventory-Management-System/assets/74129008/e458b06e-767e-4646-a94d-820fa27cd78f)

![Update Product Page](https://github.com/Rajdeep777/Inventory-Management-System/assets/74129008/e57c9a52-5b38-4e9e-b830-ba98b7eeebd4)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Routes](#routes)
- [Middleware](#middleware)
- [Authentication](#authentication)
- [File Uploads](#file-uploads)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rajdeep777/Inventory-Management-System.git
   ```

2. Install dependencies:

   ```bash
   cd Inventory-Management-System
   npm install
   ```

## Usage

To start the server, run the following command:

```bash
nodemon index.js
```

Visit `http://localhost:8000` in your web browser to access the application.

## Features

- Express.js for building robust web applications
- Authentication for secure user access
- Cookie parsing for handling HTTP cookies
- Session management for maintaining user sessions
- Express.js layout for organizing views
- Multer for handling file uploads


## Routes

Define your application routes in the `routes` directory. Organize routes using Express Router for a clean and modular code structure.

## Middleware

Custom middleware functions are located in the `middleware` directory. Middleware functions can be used for authentication, logging, and other request/response transformations.

## Authentication

Implement user authentication using the authentication middleware in the `middleware` directory. Customize authentication strategies and connect to your preferred database for user storage.

## File Uploads

Utilize Multer for handling file uploads. Customize file storage and handling settings in the `middleware/upload.js` file. Implement routes and controllers for managing file uploads.

## Contributing

Feel free to contribute to this project. Submit bug reports, feature requests, or contribute code through pull requests. For major changes, please open an issue first to discuss potential updates.

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use, modify, and distribute this code for personal or commercial purposes.

---
