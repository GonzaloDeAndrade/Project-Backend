class ProductManager{

    products = []
    
    constructor(){}
    
    addProduct(title, description, price, thumbail, code, stock){
        const product = {
            title,
            description,
            price: `$ ${price}`,
            thumbail,
            code,
            stock,
            id : this.products.length
        }

        let verificar = Object.values(product)
        let sameCode = this.products.find( prod => prod.code === code)

        if (verificar.includes(undefined) === true){
            console.log(`El producto ${product.title} NO ha sido cargado, debe completar todos los datos.`)
        }else if(sameCode){
            console.log(`El producto ${product.title} NO ha sido cargado ya que la propiedad "code" está repetida, ${sameCode.title} tiene el mismo valor.`)
        }else{
            this.products.push(product)
            console.log(`${product.title} cargado correctamente.`)
        }
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        let element = this.products.find(prod => prod.id === id)
        if (element){
            return element
        } else {
            return "Not Found"
        }
    }
}

const manager1 = new ProductManager()
const manager2 = new ProductManager()

// console.log("----- MANAGER 1 -----")
manager1.addProduct("Buzo Oversize", "Buzo de Gran calidad Tamaño Grande" , 12000, "ruta de imagen", 0, 10)
manager1.addProduct("Jogger", "Pantalon Cargo Elastizado", 17000, "ruta de imagen", 1, 8)
manager1.addProduct("Remera Adidas", "Remera 100% algodon", 13000, "ruta de imagen",2,7)
console.log(manager1.getProductById(1))