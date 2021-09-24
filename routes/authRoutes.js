// all routes for auth Model
    const express = require('express');
    const router = express.Router();
    
    
    
    
    
    router.get('/login',(req,res)=>{

        res.render('login')
    })


    router.get('/logout',(req,res)=>{
        
        //handle with passport
        
    })
    
    router.get('/google',(req,res)=>{

        //handle with passport
    })
    
    module.exports = router ;
    