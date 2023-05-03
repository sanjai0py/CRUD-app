import express from "express";
import Users from "../models/schema.js";

const router = express.Router();

// Create users
router.post("/", async (req, res) => {
  try {
    var user = await Users.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
  }
});

// Read users
router.get("/", async (req, res) => {
  try {
    var user = await Users.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
  }
});

// Read users by ID
router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    var user = await Users.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
  }
});

// Updating user data with id
router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    var user = await Users.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res
        .status(404)
        .json({ message: "cannot find user with provided ID" });
    }

    const updatedUser = await Users.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500);
  }
});

// Deleting user with ID
router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    var user = await Users.findByIdAndDelete(id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "cannot find user with provided ID" });
    }
    
    res.status(200).json({ message: "user with ID deleted" });
  } catch (error) {
    res.status(500);
  }
});
export default router;
