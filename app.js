require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con Api Key y con Token')
  }

const Trello = require("./main");
var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Card Nueva 2 ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card 2 Description", "6277f777474b1c1ab7ceefd4",
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });