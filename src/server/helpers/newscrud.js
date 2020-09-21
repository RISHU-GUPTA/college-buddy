const News=require('../models/newsschema');

const newsOperation={
    post(object,res){
        News.create(object,(err,doc)=>{
            if(err){
                console.log("Some errro occured during news posting ",err);
                res.json({"status":"F","error":err});
            }
            else{
                res.json({"news":doc});
            }
        })
    },
    news(res){
        News.find({},(err,doc)=>{
            if(err){
                console.log("Error while finding news ",err);
                res.json({"error":err})
            }
            else{
                res.send({"status":200,"news":doc});
            }
        })
    }
}
module.exports=newsOperation;