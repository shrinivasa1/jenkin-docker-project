const express=require('express');
const app=express();

app.get('/',(req,res)=> {
    res.send('welcome to devops app using docker andd jenkins!');
});
app.listen(3000,()=> console.log('app is running at 3000'));