const express=require('express');
const path=require('path');
const router=express.Router();

const products=[];
// these routes reached by the admin, as admin who is the only one who can add new product

// so he is the one that can visit add-product route
router.get('/add-product', (req,res,next) => {
   res.status(200).render('add-product',{
      PageTitle:'Add New Product',
      path:'/admin/add-product'
   });
});

// and when he create POST request from /add-product this route handle this operation
router.post('/add-product',(req,res,next)=>{
   products.push({title:req.body.title});
   //console.log(req.body.title);
   res.redirect('/home');
});

//module.exports=router;

// will be removed later///////
exports.routes=router;
exports.products=products;
//////////////////////////////////////