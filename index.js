const express=require('express');
const morgan = require('morgan');
const mongoose=require('mongoose')
const routes=require('./backend/routes/auth')
const app=express();
app.use(express.static('public'));
app.set('view engine','ejs');
const middleware=[
    morgan('dev'),
    express.json(),
    express.urlencoded({extended:true}),
    express.static('public'),
]
app.use(middleware);
app.use('/auth',routes)
const PORT=process.env.PORT || 4000;
const my_DB=process.env.DB_NAME
app.listen(PORT,()=>{
    mongoose.connect(`mongodb://127.0.0.1:27017/${my_DB}`)
    .then(()=>{
        console.log('DB connected successfully');
    }).catch(err=>{
        console.log('DB connection failed',err)
    })
    console.log(`Server is running on port ${PORT}`);
    
})