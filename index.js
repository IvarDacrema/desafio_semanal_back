class ProductManager {
    constructor(){
        this.products = []
    }

    getProduct(){
        return this.products
    }

    // thumbnail: ruta de imagen-code: codigo identificador

    addProduct(title,description,price,thumbnail,code,stock){
        const controlCode = this.#searchCode(code)
        console.log(controlCode)
        const product = {
            id: this.#generateId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log(`En el producto ${title}, uno de los campos no fue rellenado`)
        } else if (controlCode) {
            const product = this.products.find(product=>product.code===code)
            console.log(`${title} ya se encuentra en la lista con el codigo ${product.code}`)
        }  else {
            this.products.push(product)
        }
        
    }

    getProductById(idProduct){
        const product = this.#searchProduct(idProduct)
        if(product===undefined){
            console.log(`El producto no se encuentra en la lista`)
        }else{
            console.log(`El producto esta en la lista, es ${product.title}.`)
            console.log(product)
        }
    }

    #generateId(){
        let id = 1
        if(this.products.length!==0){
            id = this.products[this.products.length-1].id + 1
        }
        return id
    }

    #searchProduct(idProduct){
        return this.products.find(product=>product.id===idProduct)
    }

    #searchCode(code){
        return this.products.includes(code)
    }
}

const productManager1 = new ProductManager()
productManager1.addProduct('leche','lacteo de gran calidad',250,1,153645,12)
productManager1.addProduct('galletas','pasta con chocolate al horno',500,2,155645,52)
productManager1.addProduct('helado', 'crema fria con diferentes gustos', 100, 5, 76766, 4)
productManager1.addProduct('hamburguesas', 'medallon de carne molida', 100, 5, 76767,100)
productManager1.addProduct('helado', 'crema fria con diferentes gustos', 100, 5, 76766)

productManager1.getProductById(5)

console.log(productManager1.getProduct());

