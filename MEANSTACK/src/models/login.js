const mongoose=require("mongoose")
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        // require:true
    },
    password:{
        type:String,
        // require:true
    }
})

const Register=new mongoose.model("Mydatabase",employeeSchema)