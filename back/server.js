import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load .env first

const app = express(); // Define app BEFORE using it

app.use(express.json());
app.use(cors());

const PORTZ = process.env.PORT || 4000; // fallback if .env is missing

console.log("PORT from .env:", PORTZ);


app.get("/", (req, res) => {
  res.send("Hello");
});


app.listen(PORTZ, () => {
  console.log(`✅ Server running on port: ${PORTZ}`);
});

