const express = require("express");
const router = express.Router();

const ProductsService = require('../../services/product.service');
const productService = new ProductsService(); //llamamos el servicio


router.get("/", async function(req, res, next) {
  const { tags } = req.query;

  try {
    const products = await productService.getProducts({ tags });
    res.render("products", { products });
  } catch (error) {
    next(error);
  }


});


module.exports = router;