const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const cors = require('cors');
connectDB();

const corsOptions={
    origin:process.env.ALLOWED_CLIENTS.split(','),credentials: true 
}
//const corsOptions = { origin: ["https://fastfile-share.herokuapp.com", ""], credentials: true }


app.use(cors(corsOptions));

app.set('views',path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download', require('./routes/download'));
app.listen(PORT,()=>{
    console.log(`Listining to port ${PORT}`)
});