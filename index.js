const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/Todoroute.js');


require('dotenv').config();
const app = express();
const PORT = process.env.port || 5000
const pass = process.env.MONGO_PASS;

app.use(express.json());
app.use(cors());

mongoose
.connect(`mongodb+srv://harsh:${pass}@harsh-singh.yo9whrd.mongodb.net/ToDoApp?retryWrites=true&w=majority`)
.then(()=>console.log(`Connected to The MongoDB`))
.catch((err)=> console.log("error found", err))

app.use(routes);


app.listen(PORT,()=>{
    console.log(`listening on : ${PORT} `);
})