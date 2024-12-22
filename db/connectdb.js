import mongoose from "mongoose";

const connectDB = async (DATABSE_URL) => {
    try {
        await mongoose.connect(DATABSE_URL); //function used to connect to the database
        console.log("database is connected successfully")

    } catch(error){
        console.log(error)
    }
}

export default connectDB