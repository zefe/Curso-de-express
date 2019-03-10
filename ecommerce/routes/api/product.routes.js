const express = require('express');
const router = express.Router();

const ProductsService = require('../../services/product.service');
const productService = new ProductsService();

//CONTROLLERS

router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
        const products = await productService.getProducts({ tags });  //({ tags: query.tags })
        
        res.status(200).json({
            data: products,
            message: 'products listed'
        });
    } catch (error) {
        next(error);
    }
});

router.get('/:productId', async function(req, res, next) {
    const { productId } = req.params;
    console.log('request', req.params);

    try {
        const product = await productService.getProduct({ productId });

        res.status(200).json({
            data: product,
            message: 'product retrieved'
        });
    } catch (error) {
        next(error);
    }


});

router.post('/', async function(req, res, next) {
    const { body: product } = req; //Cuando enviamos datos por un cuerpo los tenemos que sacar del Request.  Para eso necesitamos agregar un Middleware instalar body-parser
    console.log('request', req.body);
    
    try {
        const createdProduct = await productService.createProduct({ product });

        res.status(201).json({
            data: createdProduct,
            message: 'product created'
        });
    } catch (error) {
        next(error);
    }
});

router.put('/:productId', async function(req, res, next) { //recibimos el id que queremos actualizar y lainfo del producto
    const { productId } = req.params;
    const { body: product } = req;
    console.log('request', req.params, req.body);
    
    try {
        const updateProduct = await productService.updateProduct({ productId, product });  

        res.status(200).json({
            data: updateProduct,
            message: 'product updated'
        });
    } catch (error) {
        next(error);
    }


});

router.delete('/:productId', async function(req, res, next) {
    const { productId } = req.params;    
    console.log('request', req.params);

    try {
        const deletedProduct = await productService.deleteProduct({ productId }); //enviamos el id del producto que queremos elinir al sevicio

        res.status(200).json({
            data: deletedProduct,
            message: 'product deleted'
        });
    } catch (error) {
        next(error);
    }


});


module.exports = router;
