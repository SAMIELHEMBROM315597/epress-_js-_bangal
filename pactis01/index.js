var express=require('express');
app=express();

app.get("/",function(res,res){
    res.send("hello Express js sammi hembrom samiel ")
});

app.listen(8080,function(){
    console.log("server run Success")
});