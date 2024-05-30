import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"

dotenv.config()
const app = express();
const PORT = 4000;
const {API_KEY} = process.env;

app.use(cors());

app.listen(PORT, ()=> {
	console.log(`server is running on port ${PORT}`);
})

app.get("/", async (req, res)=> {
	try{
		const response = await fetch(`${API_KEY}`);
		const data = response.json();
		res.json(data)
	}catch(error){
	console.log(error);
	}
})