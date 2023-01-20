class ProductManager {
    constructor(){
        this.products = []
    }

    getProduct(){
        return this.products
    }

    // thumbnail: ruta de imagen-code: codigo identificador

    addProduct(title,description,price,thumbnail,code,stock){
        const product = {
            id: this.#generarId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
    }
        this.products.push(product)
    }

    #generarId(){
        let id = 1
        if(this.products.length!==0){
            id = this.products[this.products.length-1].id + 1
        }
        return id
    }

    #encontrarProducto(idProduct){
        return this.products.find(product=>product.id===idProduct)
    }
}

const productManager1 = new ProductManager()
productManager1.addProduct('leche','lacteo de gran calidad',250,1,153645,12)


console.log(productManager1.getProduct());