document.addEventListener('DOMContentLoaded', () => {

  const suit = [ "&spades;", "&hearts;", "&diams;", "&clubs;" ];
  const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const upperSymbol = document.getElementById('upper-symbol');
  const lowerSymbol = document.getElementById('lower-symbol');
  const cardValue = document.getElementById('card-value');

  const generatorButton = document.getElementById('card-generator');
  const rndButton = document.getElementById('timer');

  const sizeButton = document.getElementById('size-button');
  const hgtInput = document.getElementById('height-input');
  const wdtInput = document.getElementById('width-input');
  const card = document.getElementById('card');

  function randomGenerator() {
    const randomSuit = suit[Math.floor(Math.random() * suit.length)];
    const randomValue = value[Math.floor(Math.random() * value.length)];

    return {
      rdSuit: randomSuit,
      rdValue: randomValue
    };
  }

  function updateCard() {
    const cardData = randomGenerator();

    const isRed = cardData.rdSuit === suit[1] || cardData.rdSuit === suit[2];
    const color = isRed ? "red" : "black";

    upperSymbol.style.color = color;
    lowerSymbol.style.color = color;

    upperSymbol.innerHTML = cardData.rdSuit;
    lowerSymbol.innerHTML = cardData.rdSuit;
    cardValue.innerHTML = cardData.rdValue;
  }

  updateCard();

  generatorButton.addEventListener('click', updateCard);

  rndButton.addEventListener('click', () => {
    setInterval(updateCard, 10000);
  });

  sizeButton.addEventListener('click', () => {
    card.style.height = hgtInput.value;
    card.style.width = wdtInput.value;
  });

});
