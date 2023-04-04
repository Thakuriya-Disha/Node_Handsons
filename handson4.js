const express = require("express");
const app = express();
const route = require ("./route4");
const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin:"*"
}))
app.use(route);
app.listen(5000, ()=>{
    console.log("server is running");
})