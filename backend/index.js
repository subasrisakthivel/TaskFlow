require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");


const app = express();


app.use(cors());
app.use(express.json());
app.use("/api", taskRoutes);
app.use("/api/auth", authRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection failed");
    });

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
 
