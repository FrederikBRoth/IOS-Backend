const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
	question: {
		type: String,
		required: true,
		min: 6
	},
	answer1: {
		type: String,
		required: true,
		max: 255
	},
	answer2: {
		type: String,
		required: true,
		max: 255,
    }
});
module.exports = mongoose.model("Question", questionSchema);