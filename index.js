import express from "express";
import { config as env } from "dotenv";

const app = express();
env();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, khan!");
});
