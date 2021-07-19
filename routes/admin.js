const express=require('express');
const path=require('path');
const router=express.Router();

//require controllers..
const products_controllers=require('../controllers/products');


// these routes reached by the admin, as admin who is the only one who can add new product

// so he is the one that can visit add-product route
router.get('/add-product', products_controllers.get_add_products_page);

// and when he create POST request from /add-product this route handle this operation
router.post('/add-product',products_controllers.post_product);

module.exports=router;

