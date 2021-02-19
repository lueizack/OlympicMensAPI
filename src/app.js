const express = require("express");
require("../src/db/conn");
const router = require("../src/routers/men")

const app = express();

//Assigning port to create localhost 
const port = process.env.PORT || 3000;

//Getting permission for json object from express.(Otherwise it shows undefined instead of json object)
app.use(express.json());

app.use(router);


app.listen(port,()=>{
    console.log(`Server Running on PORT ${port}`);
})
