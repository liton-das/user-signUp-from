require('dotenv').config()
const express=require('express');
const morgan = require('morgan');
const mongoose=require('mongoose')
const routes=require('./backend/routes/auth');
const dashboard=require('./backend/routes/dashboardRoute')
const session = require('express-session');
const { bindMiddleware } = require('./backend/middleware/authMiddleware');
const setLocals=require('./backend/middleware/setLocals')
const MongoDBStore = require('connect-mongodb-session')(session);
const app=express();
app.use(express.static('public'));
app.set('view engine','ejs');
const MongoDb_URi=`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`
const store = new MongoDBStore({
  uri: MongoDb_URi,
  collection: 'mySessions'
});

const middleware=[
    morgan('dev'),
    express.json(),
    express.urlencoded({extended:true}),
    express.static('public'),
    session({
        secret:process.env.SECRET_KEY ||`${process.env.SECREAT_KEY}`,
        resave:false,
        saveUninitialized:false,
        store:store
    }),
    bindMiddleware(),
    setLocals(),
]
app.use(middleware);
app.use('/auth',routes)
app.use('/dashboard',dashboard)
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    mongoose.connect(MongoDb_URi)
    .then(()=>{
        console.log('DB connected successfully');
    }).catch(err=>{
        console.log('DB connection failed',err)
    })
    console.log(`Server is running on port ${PORT}`);
    
})