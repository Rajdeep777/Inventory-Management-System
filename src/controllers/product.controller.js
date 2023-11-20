import ProductModel from '../models/product.model.js'

class ProductController{
    getProducts(req, res, next) {
        let products = ProductModel.getAll()
        res.render('products', {products})
    }
    
    getAddProduct(req, res, next){
        res.render('product-form', {errorMessage : null})
    }

    getUpdateProductView(req, res, next) {
        // if product exists then return view
        const id = req.params.id
        const productFound = ProductModel.getById(id)
        if (productFound) {
            res.render('update-product', {product: productFound, errorMessage: null})
        }
        // else return error
        else {
            res.status(401).send('Product is not found')
        }
    }

    postUpdateProduct(req, res) {
        ProductModel.update(req.body)
        let products = ProductModel.getAll()
        res.render('products', {products})
    }
    
    postAddProduct(req, res, next) {
        const { name, desc, price } = req.body
        const imageUrl = 'images/' + req.file.filename
        ProductModel.add(name, desc, price, imageUrl)
        let products = ProductModel.getAll()
        res.render('products', {products})
    }

    deleteProduct(req, res) {
        const id = req.params.id
        const productFound = ProductModel.getById(id)
        if (!productFound) {
         return res.status(401).send('Product not found');
        }
        ProductModel.delete(id)
        let products = ProductModel.getAll()
        res.render('products', {products})
    }

}

export default ProductController