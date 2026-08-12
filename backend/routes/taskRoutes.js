const express = require("express");
const Task = require("../models/Task");

const router = express.Router();


console.log("TAsk routes loaded");

router.post("/tasks", async (req, res) => {
    try {
        const { title, priority, status } = req.body;

        const task = await Task.create({
            title,
            priority,
            status
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create task"
        });
    }
});


router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch tasks"
        });
    }
});

module.exports = router;