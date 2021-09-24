
    // importing dependencies
    const express = require('express');
    const dotenv = require('dotenv').config();
    const dbconnect = require('./database/connection');
    
    //importing routes - 
    const authRoutes = require('./routes/authRoutes');
    
    // PORT defined in the env file
    const PORT = process.env.PORT || 3000;
    
    
    // initializing express application
    const app = express();
    
    // connect to the database
    dbconnect;
    
    app.set('view engine','ejs')
    
    // Request payload middleware
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    
    
    // Handle custom routes - add the custom routes
    // app.use('/api/v1/user', require('./routes/userRoutes'))

    app.use('/auth',authRoutes);
    
    
    // checks if server is working
    app.get('/', (req, res) => {
      res.render('home')
    })
    

    // app listens on the selected Port
    app.listen(PORT, () => {
      console.log("Server listening ")
    })
    