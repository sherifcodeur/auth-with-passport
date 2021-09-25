// all routes for auth Model
    const express = require('express');
    const router = express.Router();
    const passport = require('passport')
    
    
    
    
    
    router.get('/login',(req,res)=>{

        res.render('login')
    })


  
    
    router.get('/google',passport.authenticate('google',{

        scope:['profile','email']
    }))



    router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{

        res.redirect('/profile/')
    })


    router.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
      });
    
    module.exports = router ;
    