import mongoose from "mongoose";

export const dbConnect=async()=>{
    try {
        await mongoose.connect("mongodb+srv://sanjam:sanjam@cluster0.5s2ux4h.mongodb.net/schoolData?retryWrites=true&w=majority")
        console.log("DB CONNECTED Succesful")
    } catch (error) {
        console.log("Connection Failed")
    }
}