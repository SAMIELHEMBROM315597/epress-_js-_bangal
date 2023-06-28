var express=require('express');
app=express();

app.get("/",function(res,res){
    res.send("hello Express js sammi hembrom samiel ")
});

app.get("/about",function(res,res){
    res.send("hello Express js about page sammi hembrom samiel ")
});
app.get("/contact",function(res,res){
    res.send("hello Express js  contact sammi hembrom samiel ")
});
app.get("/terems",function(res,res){
    res.send("hello Express js terems page sammi hembrom samiel ")
});
app.get("/outsite",function(res,res){
    res.send("hello Express js outsite page sammi hembrom samiel ")
});
app.listen(8080,function(){
    console.log("server run Success")
});