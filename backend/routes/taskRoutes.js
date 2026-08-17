const express = require("express");
const Task = require("../models/Task");

const router = express.Router();


console.log("Task routes loaded");

router.post("/tasks", async (req, res) => {
    try {
        const { title, description, priority, dueDate } = req.body;

        const task = await Task.create({
            title,
            description,
            priority,
            dueDate,
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

router.put("/tasks/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({
            message: "Failed to update task"
        });
    }
});

router.delete("/tasks/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({
            message: "Task deleted successfully",
            deletedTask
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete task"
        });
    }
});

module.exports = router;