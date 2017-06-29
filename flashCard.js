const BasicCard = require("./BasicCard");
const ClozeCard = require("./ClozeCard");

let firstPresident = BasicCard.CreateCard (
    "Who was the first president of the United States?", "George Washington");

console.log(`This is an example of a Basic Card. The text on the front of the card is "${firstPresident.front}" and the text on the back of the card is "${firstPresident.back}".`);

let firstPresidentCloze = ClozeCard.CreateCard(
    "George Washington was the first president of the United States.", "George Washington");


console.log(`This is an example of a Cloze Card. The cloze text reads "${firstPresidentCloze.cloze}", the partial text is "${firstPresidentCloze.partial}", and the full text would be "${firstPresidentCloze.fullText}".`);

console.log('Here is an example of an error thrown when the cloze does not exist in the full text.')

let errCloze = ClozeCard.CreateCard("George Washington was the first president of the United States.", "John Adams");
