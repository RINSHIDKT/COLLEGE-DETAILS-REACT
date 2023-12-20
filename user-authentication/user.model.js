import mongoose from "mongoose";


const Admin_schema=new mongoose.Schema({
    name:{type:String},
    username:{type:String},
    password:{type:String}
})



export default mongoose.model.admins||mongoose.model("admin",Admin_schema);