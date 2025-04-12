import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener('DOMContentLoaded', () => {

  const suit = [ "&spades;", "&hearts;", "&diams;", "&clubs;"];
  const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function randomGenerator() {

    const randomSuit = suit[Math.floor(Math.random() * suit.length)];
    const randomValue = value[Math.floor(Math.random() * value.length)];
    
    return {
      suitRd: randomSuit,
      valueRd: randomValue
    }

  }

  const card = randomGenerator();

  document.getElementById('upper-symbol').innerHTML = card.suitRd;
  document.getElementById('lower-symbol').innerHTML = card.suitRd;
  document.getElementById('card-value').innerHTML = card.valueRd;

});