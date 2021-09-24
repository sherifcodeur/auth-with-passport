// all routes for auth Model
    const express = require('express');
    const router = express.Router();
    const passport = require('passport')
    
    
    
    
    
    router.get('/login',(req,res)=>{

        res.render('login')
    })


    router.get('/logout',(req,res)=>{
        
        //handle with passport
        
    })
    
    router.get('/google',passport.authenticate('google',{

        scope:['profile','email']
    }))



    router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{

        console.log(req.body);
    })
    
    module.exports = router ;
    