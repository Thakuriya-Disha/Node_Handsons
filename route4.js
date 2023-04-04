const route = require("express").Router()
const Bcrypt = require("bcrypt");
const formData = [];

const saltround = 10;
route.post("/register", async (req,res) => {
    const detail = req.body;

    const hashpwd = await Bcrypt.hash(detail.password, saltround);
    console.log(hashpwd);

    const obj = {
        email:detail.email,
        password:hashpwd
    }
    formData.push(obj);
    res.send(formData);
})

route.post("/login", (req,res) => {
    formData.forEach(async (data) => {
        if(req.body.email === data.email){
            const validate = await Bcrypt.compare(req.body.password, data.password);
                if(validate){
                    res.send({ message: "Successfully logged in"})
                }
                else{
                    res.send({ message: "Password is wrong"})
                }
        }
    })
})

module.exports = route;