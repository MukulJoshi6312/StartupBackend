import mongoose from "mongoose";

const database = async()=>{
    try{
        mongoose.connection.on('connected',()=>console.log("Database connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/projectQueries`)
    }catch(error){
        console.log("Database connection failed");
        process.exit(1);
    }
}
export default database;
