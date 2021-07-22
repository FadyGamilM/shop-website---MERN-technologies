
//const products=[];
const product = require('../models/product');
const Product=require('../models/product');

// controller that used to show the home page that contains all products
exports.get_all_products=(req,res,next)=>{
   // products is an array of objects and each object has a title property
   // let Number_of_products=products.length;
   const products=Product.get_All_products();
   res.status(200).render('shop/products-list',{
      PageTitle:'Shop',
      products:products,
      path:'/shop',
      hasProducts:products.length
   });
}

// controller that show the add-product page which contains the form of a new product
exports.get_add_products_page=(req,res,next) => {
   res.status(200).render('admin/add-product',{
      PageTitle:'Add New Product',
      path:'/admin/add-product'
   });
}

// controller that allows admin to add new product
exports.post_product=(req,res,next)=>{
   //products.push({title:req.body.title});
   const title=req.body.title;
   const imagURL=req.body.imagURL;
   const price=req.body.price;
   const description=req.body.description;
   let product=new Product(title,imagURL,price,description);
   product.save();
   res.redirect('/shop');
}

// controller that allows admin to edit product
exports.get_edit_product_page=(req,res,next)=>{
  res.status(200).render('admin/edit-product',{
     PageTitle:'Edit Product',
     path:'/admin/edit-product'
  }); 
};

// controller that allows admin to view all products
exports.get_products_list=(req,res,next)=>{
   res.status(200).render('admin/products-list',{
      PageTitle:'Products List',
      path:'/admin/products-list'
   });
};

// controller that serves the GET request for cart route
exports.get_cart_page=(req,res,next)=>{
   res.status(200).render('shop/cart',{
      PageTitle:'Cart',
      path:'/cart'
   }); 
};

//controller that serves the GET request for /products/:id, to get the details page of specific product
exports.get_specific_product_details_page=(req,res,next)=>{
   const prod_id=req.params.productID;
   Product.findByID(prod_id, (prod)=>{
      console.log(prod);
   });
   console.log(Product.get_All_products());
   res.redirect('/home');
};

exports.get_checkout_page=(req,res,next)=>{
   res.status(200).render('shop/checkout',{
      PageTitle:'Checkout',
      path:'/checkout'
   });
};

exports.get_home_page=(req,res,next)=>{
   res.status(200).render('shop/index',{
      PageTitle:'Home',
      path:'/home'
   });
}

exports.get_product_details_page=(req,res,next)=>{
   res.status(200).render('shop/product-details',{
      PageTitle:'Product Details',
      path:'/product-details'
   });
};


