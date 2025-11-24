import express from "express"
import dotenv from "dotenv"
dotenv.config();
import authRouter from "./routes/auth.routes.js";
import connectToDB from "./config/db.js";

const app = express();
const PORT =  process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Hello world!!");
})

app.listen(PORT, () => {
    connectToDB();
    console.log(`Listening on port: ${PORT}`);
})