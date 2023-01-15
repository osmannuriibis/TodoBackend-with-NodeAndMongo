const mongoose = require('mongoose');
const URL  = process.env.MONGO_URL;
console.log("OLDU");
const connectionParams={
    dbName: 'todo-app',
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(URL,connectionParams).then((val)=>{
    console.log("DB Connection Successful");
    //console.log(val.);
}).catch((err)=>{
    console.log("DB Connection Failure");
    console.log(err);
});
