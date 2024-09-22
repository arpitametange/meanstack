const express=require('express')
const path=require('path')
const app=express()
const hbs=require('hbs')

require("./db/conn")   //db connection with node
const Register=require("./models/login")


const port=process.env.PORT || 3000

const static_path=path.join(__dirname,"../src/public")   //for the path of index.html
// console.log(static_path);
const template_path=path.join(__dirname,"../templates/views")  //path for index.hbs
const patials_path=path.join(__dirname,"../templates/partials")  // path for navbar code

app.use(express.json())
app.use(express.urlencoded({extended:false}))   //get data from form

app.use(express.static(static_path))
app.set('view engine',"hbs")
app.set("views",template_path)
hbs.registerPartials(patials_path)
app.get('/',(req,res)=>{
res.render("index")
})

app.get("/login",(req,res)=>{
    res.render("login")
})
app.use(express.json())
app.post("/login", async(req,res)=>{
   try{
// console.log(req.body.name);
// res.send(req.body.name)
// console.log(req.body.password);
console.log('data of req',req.body)

const registeremploy=new Register({
    name:req.body.name,
    password:req.body.password
})
res.send(registeremploy)
console.log('registeremploy',registeremploy);
const register=await registeremploy.save();
console.log('register',register);
res.status(201).render("index")
// res.send(req.body.password)

   }
   catch(error)
{
    res.status(400).send(error)

}})


app.listen(port,()=>{
    console.log(`connected succfully ${port}`);
})