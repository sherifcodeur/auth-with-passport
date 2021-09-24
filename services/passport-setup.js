

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/User');


passport.use(new GoogleStrategy({
//options for the google strategy
    callbackURL:'/auth/google/redirect',
    clientID: process.env.CLIENT_ID,
    clientSecret : process.env.CLIENT_SECRET

},(accesstoken,refreshtoken,profile,done)=>{
// callback function

        console.log(profile)


        User.findOne({googleId:profile.id})
        .then((newUser)=>{

            if(newUser){

                console.log(newUser)

            }else{

                        new User({

                            googleId:profile.id,
                            name:profile.displayName,

                        }).save()
                        .then(newUser=>{

                            console.log(newUser)
                        })
                        .catch(err=>console.log(err))

            }

        }    

        )




        



}))

