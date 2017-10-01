var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var S1 = {
	Q1: ClozeCard(
		"In the episode, 'Pilot', Rick takes Morty to another dimension to collect seeds of 'Mega Trees', which Morty agrees to hide in his own rectum to get past intergalactic customs. ",
		"rectum"
	),
	Q2: ClozeCard(
		"In the episode, 'Lawnmower Dog', Rick and Morty are chased by a dream character named Scary Terry, a parody of Freddy Krueger. They manage to enter his dream, where they stand up for him against his bully teacher. This persuades Scary Terry to help them complete their mission.",
		"Scary Terry"
	),
	Q3: BasicCard(
		"In the episode, 'Anatomy Park', what was the name of Rick's ride?",
		"Pirates of the Pancreas"
	),
	Q4: BasicCard(
		"In the episode, 'M. Night Shaym-Aliens', what product was Jerry trying to sell with his advertising slogan?",
		"apples"
	),
	Q5: ClozeCard(
		"In the episode, 'M. Night Shaym-Aliens', aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. Eventually, Rick games the aliens by giving them a fake recipe.",
		"Concentrated Dark Matter"
	),
	Q6: BasicCard(
		"In the episode, 'Meeseeks and Destroy', how many strokes would Jerry like off his golf game?",
		"two"
	),
	Q7: BasicCard(
		"In the episode, 'Rick Potion #9', Rick attempts to fix up an antidote, but he fails twice, ultimately causing all humans affected by the love potion to turn into mutated monsters called 'Cronenbergs'.",
		"Cronenbergs"
	),
	Q8: ClozeCard(
		"In the episode, 'Raising Gazorpazorp', females are the dominant gender on the planet.",
		"females"
	),
	Q9: BasicCard(
		"In the episode, 'Rixty Minutes', after looking through Rick's goggles and seeing the realities she wasn't present in, who persuaded Summer to stay with the family instead of running away?",
		"Morty"
	),
	Q10: ClozeCard(
		"In the episode, 'Something Ricked This Way Comes', Summer works in an antique shop run by the devil, which gives away items that come with harmful curses.",
		"devil"
	),
	Q11: ClozeCard(
		"In the episode, 'Close Rick-counters of the Rick Kind', the Smith household is flooded with other Ricks and Jerry develops a friendship with the good-natured 'Doofus Rick'",
		"Doofus Rick"
	),
	Q12: BasicCard(
		"In the episode, 'Close Rick-counters of the Rick Kind', who is the person behind the killing of 27 Ricks and the abduction of their Mortys?",
		"Evil Morty"
	),
	Q13: ClozeCard(
		"In the episode, 'Ricksy Business', Jerry and Lucy spend time together because of their shared love of 'Titanic'. Later, she shows her true motives and attempts to violate Jerry.",
		"Lucy"
	),
	Q14: BasicCard(
		"In the episode, 'Ricksy Buisness', Summer throws a party, but the house is suddenly transported to another dimension, who seemingly dies?",
		"Abradolf Lincler"
	)
};

var S2 = {
	Q1: BasicCard(
		"In the episode,'Total Rickall', what creatures invaded the Smith household?",
		"Parasites"
	),
	Q2: BasicCard(
		"During the episode, 'Total Rickall', who was the only non-parasite that got shot?",
		"Mr. Poopybutthole"
	),
	Q3: ClozeCard(
		"Mr. Poopybutthole appears in the memory where the family is stuck in the elevator at the Hulk musical. A negative memory, which is a tip off to his non-parasite identity.",
		"elevator"
	)
};

console.log("\n================\n");
console.log(S1.Q1);
console.log("\n================\n");
console.log(S1.Q2);
console.log("\n================\n");
console.log(S1.Q3);
console.log("\n================\n");
console.log(S1.Q4);
console.log("\n================\n");
console.log(S1.Q5);
console.log("\n================\n");
console.log(S1.Q6);
console.log("\n================\n");
console.log(S1.Q7);
console.log("\n================\n");
console.log(S1.Q8);
console.log("\n================\n");
console.log(S1.Q9);
console.log("\n================\n");
console.log(S1.Q10);
console.log("\n================\n");
console.log(S1.Q11);
console.log("\n================\n");
console.log(S1.Q12);
console.log("\n================\n");
console.log(S1.Q13);
console.log("\n================\n");
console.log(S1.Q14);
console.log("\n================\n");