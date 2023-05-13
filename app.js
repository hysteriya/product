const express=require('express');
const app=express();
const router=require('./routes');

app.use(express.json());

app.listen(3000, ()=>{
    console.log('server listening');
});

app.use('/app', router);