const express=require('express');
const path=require('path');

const router=express.Router();

const adminRoutes_Data=require('./admin');
const products=adminRoutes_Data.products;

// require controllers..
const products_controllers=require('../controllers/products');
const { route } = require('./admin');

// ==> when we write the controller we don't execute it, we just write its name.

// route for page that shows all products to users [USER point of view to all products]
router.get('/shop',products_controllers.get_all_products);

// route for GET request for cart URL
router.get('/cart',products_controllers.get_cart_page);

//route for GET request for checkout URL
router.get('/checkout',products_controllers.get_checkout_page);

//route for GET request for home URL
router.get('/home',products_controllers.get_home_page);

//route for GET request for product details URL
router.get('/product-details',products_controllers.get_product_details_page);

// route for GET rqeuest for specific product details page (i.e /products/:1 )
////// important note that this type of routes called dynamic routes, so if we have any specific routes
////// such as /products/delete ==> we have to put our dynamic route after all those routes that start with /products/ANY_THING
router.get('/products/:productID',products_controllers.get_specific_product_details_page);


module.exports=router;
