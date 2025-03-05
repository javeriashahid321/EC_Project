const express=require('express');
const app=express();
const userRoute=require('./routes/user.route')
const bussinessRoute=require('./routes/bussiness.route')
const cors=require('cors');

const corsOptions={
    origin:"http://localhost:5173"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/user',userRoute)
app.use('/bussiness',bussinessRoute)

module.exports=app;