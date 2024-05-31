import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rgokulaids2021:mongodb@cluster0.swwzieh.mongodb.net/').then(()=>console.log("DataBase Connected"));
}