import express from "express"
import postRouter from "./routers/post.js"


const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res)=>{
    console.log("sono la rotta /");
    res.send("server attivo")
})

app.use("/post", postRouter)

app.listen(port, function (){
    console.log("Ciao Luca il server è in ascolto sulla porta" + port);
})