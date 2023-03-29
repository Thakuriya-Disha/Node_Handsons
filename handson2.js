const express = require("express");
const app = express();

app.use(express.json())
const studentData=[
    {
        name:"Alison Taylor",
        age:25
    },
    {
        name:"William Bowery",
        age:24
    }
]
app.get("/",(request,response)=>{
    response.send(JSON.stringify({Response:`Express.js is a free open-source web application framework for Node. Some of its features are: Robust routing, Focus on high performance, Super-high test coverage, HTTP helpers. The route created is '/data'.`}))
})
app.get("/data",(request,response)=>{
    response.send(studentData)
})
app.post("/data",(request,response)=>{
    response.send(request.body)
})

app.listen(2000,()=>{
    console.log("server running")
})