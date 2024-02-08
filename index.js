const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')



const userRoutes = require('./Routes/userRoutes');


const app = express();
const PORT = process.env.PORT  || 5000
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/expressjs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));


app.listen(PORT,()=> console.log(`server started on port ${PORT}`));



app.use(express.json())
app.use(session({
    secret:'ZCDIOEZAJELGFERMLLGCPËKPOKEVPOKG',
    resave:false,
    saveUninitialized : false
    
}))
app.use('/api/v1/user',require('./Routes/userRoutes'))

app.use("/users", userRoutes); 


const GroceryList = ([
{
    item : "milk",
    quantity : 2
},
{
    item : "cereal",
    quantity : 1
},
{
    item : "eggs",
    quantity : 12
}
])




app.get('/user/:itemname', function (req, res) {
    const itemname = req.params.itemname 
    const item = GroceryList.find((g)=>
        g.item === itemname
        
    )
    res.status(item).send(item)

  })
 

app.get("/groceries", 

(req,res,next)=>{
    console.log("1")
    next();

},

(req,res,next)=>{
    console.log("2")
    res.send(GroceryList);
    next();

},

(req,res)=>{
    console.log("3")
}

)

app.post("/groceries",(req,res)=>{
    console.log(req.body)
    GroceryList.push(req.body)
    res.send(GroceryList)
    res.status(201).json({ message: "Grocery item added successfully" });
})


app.get ("/query",(req,res)=>{
    const { q1, q2 } = req.query;
    console.log(`q1 =  ${q1} /n q2 = ${q2}`)
    res.cookie("visited","true",{
        maxAge:10000
    })

    res.send("querry page work")
    

})


