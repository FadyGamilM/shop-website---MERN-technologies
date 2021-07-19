const express=require('express');
const path=require('path');

const router=express.Router();

const adminRoutes_Data=require('./admin');
const products=adminRoutes_Data.products;

router.get('/home',(req,res,next)=>{
   // products is an array of objects and each object has a title property
   let Number_of_products=products.length;
   res.status(200).render('shop',{
      PageTitle:'Shop',
      products:products,
      path:'/home',
      hasProducts:Number_of_products
   });
});


module.exports=router;
