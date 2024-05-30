import cors from "cors";
import express from "express";
import dotenv from "dotenv"

dotenv.config();
const app = express();
const PORT = 4000;
// const {API_KEY} = process.env;


app.use(cors());

app.listen(PORT, ()=>{
	console.log(`Server is now running on port ${PORT}`);
})