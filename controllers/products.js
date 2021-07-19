const products=[];

exports.get_all_products=(req,res,next)=>{
   // products is an array of objects and each object has a title property
   let Number_of_products=products.length;
   res.status(200).render('shop',{
      PageTitle:'Shop',
      products:products,
      path:'/home',
      hasProducts:Number_of_products
   });
}

exports.get_add_products_page=(req,res,next) => {
   res.status(200).render('add-product',{
      PageTitle:'Add New Product',
      path:'/admin/add-product'
   });
}

exports.post_product=(req,res,next)=>{
   products.push({title:req.body.title});
   //console.log(req.body.title);
   res.redirect('/home');
}