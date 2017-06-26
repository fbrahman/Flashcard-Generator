const BasicCard = require("./BasicCard");
const ClozeCard = require("./ClozeCard");

let newBasic = BasicCard.CreateCard ("front", "back");
console.log(newBasic.front, newBasic.back);

let newCloze = ClozeCard.CreateCard("this is a test", "this");
console.log(newCloze.fullText, newCloze.cloze, newCloze.partial);
