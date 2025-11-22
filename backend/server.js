import express from "express"
import dotenv from "dotenv"
dotenv.config();
import authRouter from "./routes/auth.routes.js";

const app = express();
const PORT =  process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello world!!");
})

app.use("/api/auth", authRouter);


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})