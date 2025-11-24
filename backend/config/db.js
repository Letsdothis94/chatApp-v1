import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to db");
    } catch (error) {
        console.log("Error connectiong to db", error.message);
        process.exit(1);
    }
}

export default connectToDB;