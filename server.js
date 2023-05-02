import express, { json } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";

// Connecting to the Database
const main = async () => {
  return await mongoose.connect(
    "mongodb+srv://sanjaikumar:tWwBr9fkqXUFVT0J@cluster0.yaw3xax.mongodb.net/?retryWrites=true&w=majority"
  );
};
main()
  .then((res) => console.log("DB connected"))
  .catch((err) => console.log(err));

// Server initialisation
const app = express();
const port = 3000;

// To let the server receive JSON files
app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.send("SMD");
});

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log("Port reached");
});
