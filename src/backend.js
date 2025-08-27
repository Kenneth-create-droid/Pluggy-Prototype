// server.js
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import cors from "cors";

// 1. Initialize app
const app = express();
const PORT = 5000;

// 2. Middleware
app.use(bodyParser.json());
app.use(cors());

// 3. Connect to MongoDB (Local version)
// Make sure MongoDB is running locally on your PC (mongod)
mongoose.connect("mongodb://localhost:27017/pluggyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// 4. Define User Schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// 5. Create User Model
const User = mongoose.model("User", userSchema);

// 6. Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { fullName, username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// 7. Login Route
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// 8. Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
