document.addEventListener('DOMContentLoaded', () => {

  const suit = [ "&spades;", "&hearts;", "&diams;", "&clubs;"];
  const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const upperSymbol = document.getElementById('upper-symbol')
  const lowerSymbol = document.getElementById('lower-symbol')
  const cardValue = document.getElementById('card-value')

  function randomGenerator() {

    const randomSuit = suit[Math.floor(Math.random() * suit.length)];
    const randomValue = value[Math.floor(Math.random() * value.length)];
    
    return {
      rdSuit: randomSuit,
      rdValue: randomValue
    }

  }

  function turnIconRed(element) {
    element.style.color = "red";
    console.log(element)
  }

  const card = randomGenerator();
  console.log(card);

  if(card.rdSuit === suit[1] || card.rdSuit === suit[2]){
    console.log("before")
    turnIconRed(upperSymbol)
    turnIconRed(lowerSymbol)
    console.log("after")
  }

  upperSymbol.innerHTML = card.rdSuit;
  lowerSymbol.innerHTML = card.rdSuit;
  cardValue.innerHTML = card.rdValue;

});