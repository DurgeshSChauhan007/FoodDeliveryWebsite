import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://durgeshsinghchauhan974:<password>@cluster0.o1hpt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB connected"));

}
