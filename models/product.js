// instead of table/database we will use array of products where each product is an object
let products=[];

module.exports=class product{
   // the only thing we recieve right now about the product is title
   constructor(title, imagURL,price,description){
      this.title=title;
      this.imagURL=imagURL;
      this.price=price;
      this.description=description;
   }
   // method that used to save each product to the products array
   save(){
      this.id=Math.random();
      // we will push this as we need to push the whole object
      products.push(this);
   }
   // method that will retrieve all products, so this method can't be accessed by one object, so i will make it static to be accessed by the class itself
   static get_All_products(){
      return products;
   }
   // method to return the product by it's ID
   static findByID(id, call_Back){
      let required_product;
      products.forEach(product=>{
         if (product.id==id){
            required_product=product;
            call_Back(required_product);
         }
      });
   }
};