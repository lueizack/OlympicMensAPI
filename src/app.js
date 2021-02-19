const express = require("express");
require("../src/db/conn");
const MensRanking = require("./models/mens");

const app = express();

//Assigning port to create localhost 
const port = process.env.PORT || 3000;

//Getting permission for json object from express.(Otherwise it shows undefined instead of json object)
app.use(express.json());

//Handling POST request
app.post("/mens",async(req,res)=>{
    try {
        const addingMensRecord = new MensRanking(req.body);
        console.log(req.body);
        const insertingMensData = await addingMensRecord.save();
        res.status(201).send(insertingMensData);
    } catch (e) {
        res.status(400).send(e);
    }
})

//Handling GET request
app.get("/mens",async(req,res)=>{
    try {
            const getMens = await MensRanking.find({});
            res.send(getMens);
    } catch (e) {
            res.status(400).send(e);
    }
})


app.listen(port,()=>{
    console.log(`Server Running on PORT ${port}`);
})
