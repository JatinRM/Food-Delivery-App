import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://Jatin:1029@atlascluster.inbndct.mongodb.net/food-delivery')
        .then(()=> console.log('DB connected'))
}