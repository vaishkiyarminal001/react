const express = require("express");
const { connection, UserModule } = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json())

app.use(cors());

app.get("/",(req, res) =>{
    res.send("Home.route");
});

app.get("/store",(req, res) =>{
    res.send("Store Details");
})

// another get method to check the things

app.get("/details", async (req, res) =>{
    
    const userDetails = await UserModule.find();
    res.send(userDetails);
})

app.post("/post",async (req, res) =>{
   
const paylod= req.body
console.log(paylod)

const new_user= new UserModule(paylod);

await new_user.save();
res.send({msg:"post successfull", new_user})

})
















app.listen(8080, async () =>{


    try {
        await connection
        console.log("connected to db")
        
    } catch (error) {
        console.log("something went wrong");
    }

   
    console.log("Connection Established");
});
