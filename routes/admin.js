const express=require('express');
const path=require('path');
const router=express.Router();

//require controllers..
const products_controllers=require('../controllers/products');


// these routes reached by the admin, as admin who is the only one who can add new product

// route handler for GET request to /admin/add-product URL
router.get('/add-product', products_controllers.get_add_products_page);

// route handler for POST request to /admin/add-product URL
router.post('/add-product',products_controllers.post_product);

// route handler for GET request to /admin/edit-product URL
router.get('/edit-product',products_controllers.get_edit_product_page);

// route handler for GET request to /admin/products-list URL [ADMIN point of view]
router.get('/products-list',products_controllers.get_products_list);

module.exports=router;

