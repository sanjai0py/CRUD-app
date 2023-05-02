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

// Update user
// router.put('/:id', async (req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

export default router;
