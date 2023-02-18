const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = [];

function flipCard() {
  if (flippedCards.length < 2) {
    this.classList.add('flipped');
    flippedCards.push(this);
    
    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const card1 = flippedCards[0].dataset.card;
  const card2 = flippedCards[1].dataset.card;
  
  if (card1 === card2) {
    flippedCards.forEach(card => {
      card.classList.remove('flipped');
      card.classList.add('matched');
      matchedCards.push(card);
    });
    
    if (matchedCards.length === cards.length) {
      // game over
    }
  } else {
    setTimeout(() => {
      flippedCards.forEach(card => {
        card.classList.remove('flipped');
      });
    }, 1000);
  }
  
  flippedCards = [];
}

cards.forEach(card => card.addEventListener('click', flipCard));
