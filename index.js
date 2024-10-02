import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",(req,res)=>
{
    res.render("index.ejs");
});
app.post("/sumbit",(req,res)=>
{
    const name=req.body["first"];
    const password=req.body["second"];
    if(name==="Ashish"&&password==="123")
    {
        res.render("index.ejs",
            {
                p1:name,
                p2:password,
            }
        )
    }
    else
    {
        res.render("index.ejs");
    }
})
app.listen(3000,(req,res)=>
{
    console.log("server running");
})