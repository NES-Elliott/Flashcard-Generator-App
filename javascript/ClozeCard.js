function ClozeCard(text, cloze) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}
	if ((text.indexOf(cloze)) === (-1)) {
		return console.log("Error: " + cloze + " does not appear within the card statement.");
	} else {
		this.text = text;
		this.cloze = cloze;
		this.partial = text.replace(cloze, "...");
	}
}
//  * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.
module.exports = ClozeCard;