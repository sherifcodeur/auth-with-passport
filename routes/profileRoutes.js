

const express = require('express');
const router = express.Router();

const authuser = (req,res,next)=>{
console.log("notre user",req.user)
    if(!req.user){
        
        res.redirect('/auth/login')
    }else{

        next();
    }



}

router.get('/',authuser,(req,res)=>{


    res.render('profile',{'user':req.user})
})


module.exports = router;