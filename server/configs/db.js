import mongoose from "mongoose"; 

const connectDB = async () => { 
    try { 
    mongoose.connection.on('connected', () => console.log 
    ("Database Connected") 
    ) 
    await mongoose.connect(`${process.env.MONGODB_URI}/
    ExBlog`) 
    } catch (error) { 
    console.log(error.message); 
    } 
} 

export default connectDB;