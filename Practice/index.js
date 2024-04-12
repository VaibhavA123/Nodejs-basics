// import {obj} from "./math.js";
// console.log(obj);
// console.log(process.argv);


// const data = require("./math");
// console.log(data);
// console.log(process.argv);

const ans = require("./info");
// console.log(ans);


const express = require("express");
const app = express();
let port = 8080;
app.listen(port,() => {
    console.log(`port is listening to port ${port}.......`);
});
// app.use((req,res) => {
//     console.log("request updated");
//     res.send(ans);
// });


app.get("/search",(req,res) => {
    console.log("request Updated..............");
    res.send(ans);
});
app.get("/apple",(req,res)=>{
    console.log("request Updated..............");
    res.send({
        fruit : "apple",
        season : "all",
        color : ["red","green","black"],
    });
});
// app.get("*",(req,res)=>{
//     res.send("Till now I have not created this");
// });

app.post("/mango",(req,res)=>{
    res.send({
        fruit : "mango",
        season : "summer",
        color : ["red-yellow","green","yellow"],
    });
});


app.get("/:username/:id",(req,res) => {
    let {username , id} = req.params;
    console.log(`username = ${username} , id = ${id}`);
    res.send(`Welcome to your page ${username}`);
});

app.get("/video",(req,res)=>{
    let {username,id} = req.query;
    console.log(`username = ${username} , id = ${id}`);
    res.send(ans);
})