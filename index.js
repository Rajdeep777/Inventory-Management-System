import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import dotenv from 'dotenv'
import path from 'path'
import ejsLayouts from "express-ejs-layouts";
import validationMiddleware from "./src/middlewares/validatoin.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";
import UserController from "./src/controllers/user.controller.js";
import { setLastVisit } from "./src/middlewares/lastVisit.middleware.js";
import { auth } from './src/middlewares/auth.middleware.js'
import session from "express-session";
import cookieParser from "cookie-parser";
dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.static('public'))
app.use(express.static('src/views'))
app.use(cookieParser());
app.use(setLastVisit)
app.use(
    session({
      secret: 'SecretKey',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
);

// creating instance of ProductController
const productController = new ProductController()

// creating instance of userController
const usersController = new UserController()

// Use ejs layouts
app.use(ejsLayouts)
app.use(express.json());

// parse form data
app.use(express.urlencoded({extended: true}))

// Setup view engine setting
app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src', 'views'))

// creating routes
app.get('/register', usersController.getRegister)
app.get('/login', usersController.getLogin)
app.post('/login', usersController.postLogin)
app.get('/logout', usersController.logout)
app.post('/register', usersController.postRegister)
app.get('/', setLastVisit, auth, productController.getProducts)
app.get('/add-product', auth, productController.getAddProduct)
app.get('/update-product/:id', auth, productController.getUpdateProductView)
app.post('/', uploadFile.single('imageUrl'), validationMiddleware, productController.postAddProduct)
app.post('/update-product', auth, productController.postUpdateProduct)
app.post('/delete-product/:id', auth, productController.deleteProduct)


app.listen(PORT, (req, res) => {
  console.log(`server is listening at http://localhost:${PORT}`);
})