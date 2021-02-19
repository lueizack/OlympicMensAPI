const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/olympicdb",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( () => {
    console.log("Mongoose db Connection Sccesfull");
}).catch( (e) => {
    console.log("No Connection");
})