import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    phoneNumber:{
        type:String,
        required:true,
        trim:true,
    },
    service:{
        type:String,
        required:true,
        trim:true,
    },
    projectDetail:{
        type:String,
        required:true,
        trim:true,
    },
    country:{
        type:String,
        required:true,
        trim:true,
    },
    queryStatus:{
        type:Boolean,
        default:false,
    }

},{timestamps:true})

const Contact = mongoose.model('Contact',contactSchema);
export default Contact;