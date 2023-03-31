const express = require("express");
const app = express();
app.use(express.json());

const middlewareFunc = (req,res,nxt) => {
    console.log("this is the 1st middleware");
}

const middlewareTwo = (req,res,nxt) => {
    console.log("this is middleware 2");
}

app.use(middlewareFunc);

app.get("/", (req,res) => {
    res.send("Welcome to Home page. There are 4 other routes: About page, Contact page, Login page, Signup page. There are 2 middlewares, the 2nd middleware is applicable to specifically '/about' & '/contact'.");
})

app.get("/about", middlewareTwo, (req,res) => {
    res.send("Welcome to About page");
})

app.get("/contact", middlewareTwo, (req,res) => {
    res.send("Welcome to Contact page");
})

app.get("/login", (req,res) => {
    res.send("Welcome to Login page");
})

app.get("/signup", (req,res) => {
    res.send("Welcome to Signup page");
})

app.listen(5000, () => {
    console.log("The server is running")
})