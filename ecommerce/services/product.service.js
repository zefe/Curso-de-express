const productsMocks = require('../utils/mocks/products');

//Aca lo unico que nos interesa es Logica de negocio
class ProductsService {
    constructor(){

    }
    //Listar productos
    getProducts({ tags }){
        return Promise.resolve(productsMocks);  //Devuelve una promesa porque sera asincorono por que consumiremos una libreria BD
    }

    getProduct({ productId }){  //Recibe el id del producto y
        return Promise.resolve(productsMocks[0]);  //Devuelve una promesa con el producto que solicite
    }

    createProduct({ product }){  //Recibe el contenido de producto que va a crear "POST"
        return Promise.resolve(productsMocks[0]);  
    }

    updateProduct({ productId, product }){  //Recibe el ID  del producto que va quiero actualizar
        return Promise.resolve(productsMocks[0]);  
    }

    deleteProduct({ productId }){  //Recibe el ID  del producto que va a eliminar
        return Promise.resolve(productsMocks[0]);  
    }
}

module.exports = ProductsService;