const newsOperation=require('../helpers/newscrud');
const express=require('express');
const route=express.Router();

route.post('/post',(req,res)=>{
    newsOperation.post(req.body,res);
});

route.get('/news',(req,res)=>{
    newsOperation.news(res);
});

module.exports=route;