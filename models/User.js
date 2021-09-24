
    // User Model


    //importing external dependencies
    const mongoose = require('mongoose');



    // creating User Schema
    const Schema = mongoose.Schema;
    const userSchema = new Schema({

        name : {
            type:String,
            required:[true,'required field'],       
        },
        googleId:{

            type:String,
        }
    
    },     
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        { timestamps: true }
    );


    // creating model User based on the user schema
    const User = mongoose.model('user',userSchema);



    //exporting the model User
    module.exports =  User ;