const audioElem = document.getElementById("sound");
const lettersContainer = document.getElementById("test-answers");
  
let test = new AlphabetTest(lettersResources);

audioElem.setAttribute("data-src", test.answerLetter.audioLetterUrl);
  
lettersContainer.innerHTML = "";

let cardElements = [];

function removeAllCardEvents() {
  cardElements.forEach( x => {
    x.removeEventListener('click', onLetterCardClick)
  })
}

const onLetterCardClick = (e) => {
  const letter = e.target.textContent.trim();
  removeAllCardEvents()
  if (test.answerLetter.letter == letter) {
    e.currentTarget.classList.toggle('correct-card');
  }
  else {
    e.currentTarget.classList.toggle('incorrect-card')
    setTimeout( showCorrectAnswer, 1000 )
  }
  
  
}

function showCorrectAnswer() {
  const answerCard = cardElements.find(x => x.textContent.trim() == test.answerLetter.letter);
  if(answerCard == undefined) return;

  answerCard.classList.toggle('correct-card')
}


test.letters.forEach(x => {
    let cardGen = new CardGenerator(CardType.testLetterCard, { letter: x.letter, letterColor: x.letterColor });
    console.log(x.letter)
    const elem = cardGen.htmlNode;
    cardElements.push(elem.firstElementChild.firstElementChild);
    lettersContainer.appendChild(elem);
    elem.firstElementChild.firstElementChild.addEventListener('click', onLetterCardClick)
  });

  
