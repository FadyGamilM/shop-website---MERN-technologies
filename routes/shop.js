const express=require('express');
const path=require('path');

const router=express.Router();

const adminRoutes_Data=require('./admin');
const products=adminRoutes_Data.products;

// require controllers..
const products_controllers=require('../controllers/products');

// when we write the controller we don't execute it, we just write its name.
router.get('/home',products_controllers.get_all_products);

module.exports=router;
