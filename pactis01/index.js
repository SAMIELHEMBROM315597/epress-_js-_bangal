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
//status cood respos
app.get("/one",function(res,res){
    res.status(201).end();
});

app.get("/two",function(res,res){
    res.status(401).end();
});

// JSON Response
app.get("/four",function (req,res) {
    let MyJSONArray=[
        {
            name:"Rabbil",
            city:"Dhaka",
            occupation:"Engr."
        },
        {
            name:"Rakib",
            city:"Dhaka",
            occupation:"Pharama"
        },
        {
            name:"Rifat",
            city:"Rangpur",
            occupation:"Student"
        }

    ]
    res.json(MyJSONArray);
})

// Response Download
app.get("/five",function (req,res) {
    res.download("./dowenlode/ab.jpg");
})

// Response Redirect
app.get("/bangladesh",function (req,res) {
    res.redirect("http://localhost:8080/india")
})
app.get("/india",function (req,res) {
    res.send("This is india");
})
app.get("/six",function (req,res) {
    res.redirect("http://localhost:8080/seven")
})
app.get("/seven",function (req,res) {
    res.send("This is seven");
})

app.get("/eight",function (req,res) {
    res.append("name","samiel hembrom");
    res.append("city","Dhaka");
    res.append("age","23 Years Old");
    res.status(201).end("Hello World");
})

app.get("/nine",function (req,res) {
    res.cookie('name','samiel hembrom')
    res.cookie('city','Dhaka')
    res.cookie('age','23 years old')
    res.end("cookie set success")

})
app.get("/ten",function (req,res) {

    res.clearCookie('name')
    res.clearCookie('age');
    res.clearCookie('city')


    res.end("cookie clear success")

})
app.listen(8080,function(){
    console.log("server run Success")
});