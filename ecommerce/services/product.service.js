//const productsMocks = require('../utils/mocks/products');
const MongoLib = require('../lib/mongo')

//Aca lo unico que nos interesa es Logica de negocio
class ProductsService {
    constructor(){
        this.collection = "products";
        this.mongoDB = new MongoLib();
    }
    //Listar productos
    async getProducts({ tags }){
        const query = tags && { tags: { $in: tags } };
        const products = await this.mongoDB.getAll(this.collection, query);
        return products || [];  //Devuelve una promesa porque sera asincorono por que consumiremos una libreria BD
    }

    async getProduct({ productId }) {
        const product = await this.mongoDB.get(this.collection, productId);
        return product || {};
    }
    
    async createProduct({ product }) {
        const createProductId = await this.mongoDB.create(this.collection, product);

        return createProductId;
    }

    async updateProduct({ productId, product }) {
        const updateProductId = await this.mongoDB.update(
            this.collection,
            productId,
            product
        );
        return updateProductId;
    }

    async deleteProduct({ productId }) {
        const deletedProductId = await this.mongoDB.delete(
            this.collection,
            productId
        );
        return deletedProductId;
    }

    // getProduct({ productId }){  //Recibe el id del producto y
    //     return Promise.resolve(productsMocks[0]);  //Devuelve una promesa con el producto que solicite
    // }

    // createProduct({ product }){  //Recibe el contenido de producto que va a crear "POST"
    //     return Promise.resolve(productsMocks[0]);  
    // }

    // updateProduct({ productId, product }){  //Recibe el ID  del producto que va quiero actualizar
    //     return Promise.resolve(productsMocks[0]);  
    // }

    // deleteProduct({ productId }){  //Recibe el ID  del producto que va a eliminar
    //     return Promise.resolve(productsMocks[0]);  
    // }
}

module.exports = ProductsService;