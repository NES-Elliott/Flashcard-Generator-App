var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var Total_Rickall = {
	Q1: new BasicCard(
		"In the episode,'Total Rickall', what creatures invaded the Smith household?",
		"Parasites"
	),
	Q2: new BasicCard(
		"During the episode, 'Total Rickall', who was the only non-parasite that got shot?",
		"Mr. Poopybutthole"
	),
	Q3: new ClozeCard(
		"Mr. Poopybutthole appears in the memory where the family is stuck in the elevator at the Hulk musical. A negative memory, which is a tip off to his non-parasite identity.",
		"elevator"
	)
};

//console.log(Total_Rickall.Q1.front + "\n\n" + Total_Rickall.Q1.back);

console.log(Total_Rickall.Q3.partial + "\n\n" + Total_Rickall.Q3.text);