const express = require("express");
const path = require("path");
const app = new express();

const PORT = 3003;

//Delay by 3seconds when navigating from page to page 
//app.use(function(req, res, next){
    //setTimeout(next, 3000);
//})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/logout", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "logout.html"));
});

app.get("/noids", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "noids.html"));
});


app.listen(PORT, () => console.log('server started on por ${PORT}'));