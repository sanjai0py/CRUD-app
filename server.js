import express, { json } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";
dotenv.config();

// Connecting to the Database
const main = async () => {
  return await mongoose.connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.yaw3xax.mongodb.net/?retryWrites=true&w=majority`
  );
};
main()
  .then((res) => console.log("DB connected"))
  .catch((err) => console.log(err));

// Server initialisation
const app = express();
const port = 5000;

// To let the server receive JSON files
app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.send("SMD");
});

app.use("/users", userRoutes);

app.listen(port, () => {});
