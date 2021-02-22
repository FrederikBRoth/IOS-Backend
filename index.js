const express = require("express")
const app = express()
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const Question = require("./Models/Question");
const { request } = require("express");

dotenv.config();
app.use(express.json());
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("connected to DB");
	}
);

app.get("/", (req, res) => {
    res.send("hej")
})

app.post("/questionsubmit", (req, res) => {

    const question = new Question({
        question: req.body.question,
        answer1: req.body.answer1,
        answer2: req.body.answer2
    })

    const savedQuestion = question.save()
    res.send("it worked!")
})

app.get("/getquestions", async (req, res) => {
    const questions = await Question.find()
    console.log("test")
    res.send(questions)
})
app.listen("5000", "0.0.0.0", () => {
    console.log("server up!")
})