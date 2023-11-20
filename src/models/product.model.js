class ProductModel {
    constructor(id, name, desc, price, imageUrl) {
        this.id = id
        this.name = name
        this.desc = desc
        this.price = price
        this.imageUrl = imageUrl
    }

    static getAll() {
        return products
    }
    
    static update(productObj) {
        const index = products.findIndex((p) => p.id == productObj.id)
        products[index] = productObj
    }
    
    static add(name, desc, price, imageUrl) {
        const newProduct = new ProductModel(
            products.length + 1,
            name,
            desc,
            price,
            imageUrl
        )
        products.push(newProduct)
    }

    static getById(id) {
        return products.find((p) => p.id == id)
    }
    

    static delete(id) {
        const index = products.findIndex(p => p.id == id)
        products.splice(index, 1)
    }


}


var products = [
    new ProductModel(
        1,
        'Something Wicked This Way Comes',
        'One of Ray Bradbury’s best-known and most popular novels, Something Wicked This Way Comes, now featuring a new introduction and material about its longstanding influence on culture and genre',
        550,
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1409596011i/248596.jpg'
    ),
    new ProductModel(
        2,
        'The Silence of the Lambs (Hannibal Lecter, #2)',
        'A serial murderer known only by a grotesquely apt nickname—Buffalo Bill—is stalking women. He has a purpose, but no one can fathom it, for the bodies are discovered in different states',
        650,
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647930822i/23807.jpg'
    ),
    new ProductModel(
        3,
        'A Thousand Splendid Suns',
        'Mariam is only fifteen when she is sent to Kabul to marry the troubled and bitter Rasheed, who is thirty years her senior',
        950,
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655336738i/128029.jpg'
    )

]

export default ProductModel