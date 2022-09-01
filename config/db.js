require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTTION_URL).then(con=>{
        console.log('Database Connected');
    }).catch(err=>{
        console.log(err);
    });
    
}

module.exports = connectDB;