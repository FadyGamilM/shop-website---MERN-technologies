const express= require("express");
const bodyParser=require('body-parser');
const path=require('path');

const adminRoutes_Data=require('./routes/admin');

const shopRoutes=require('./routes/shop');

const app=express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static('./public/images'));
app.set('view engine','ejs');
app.set('views','views');

app.use('/admin',adminRoutes_Data.routes);
app.use(shopRoutes);

/** As we know the middleware handlers are executed from top to bottom, so if the the route
 *  that entered from the user doesn't match any of above routes handlers,
 *  so this is an wrong route that should be handled by the next middleware
 * NOTE that i used use so we can 
 */
app.use((rqe,res)=>{
   res.status(200).render('error',{
      PageTitle:'404 Error Not Found',
      path:''   
   });
});

app.listen(3000); 