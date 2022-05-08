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

/*
Qué dependencias estan usando.

1. es6-promise
2. object-assign
3. needle -> se cambio a restler
4. chai
5. mocha
6. q
7. sinon
8. sinon-chai

Cuál es el archivo principal

- El archivo principal es el main.js

Están usando Common JS o ESM

- En el proyecto se usa Common JS

Qué framework de pruebas estás usando

Se esta usando Chai, Sinon y Mocha

Cómo están diseñadas las pruebas

Primero tienen su describe, y en dentro de cada prueba se crea primero un foreachBefore, seguido de eso se 
hacen las pruebas usando la palabra clave "it"
*/