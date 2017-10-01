function ClozeCard(text, cloze) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
}
//  * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.
module.exports = ClozeCard;