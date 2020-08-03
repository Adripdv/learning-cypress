const express = require("express");
const path = require("path");
const app = new express();

const PORT = 3003;

// to start the server run 'node index.js' in the command prompt 
// //npm run cypress:open (to lunch cypress browser)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/logout", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "logout.html"));
});


app.listen(PORT, () => console.log('server started on por ${PORT}'));