exports.get404_page=(rqe,res)=>{
   res.status(200).render('error',{
      PageTitle:'404 Error Not Found',
      path:''   
   });
};