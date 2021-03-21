const audio = new Audio();

$(() => {
  lettersResources.forEach( x => {
    const cardGen = new CardGenerator(CardType.learnCard, {
      imgPath: x.imgPath, 
      letterColor: x.letterColor, 
      letter: x.letter, 
      cardText: x.cardText,
      cardTextColor: x.cardTextColor
    });
    $(cardGen.html).appendTo( $('#cardPool') ).on("click", function(){
      const letterText = $(this).find("span.letter-card--letter").text();
      const letterObject = lettersResources.find( x => x.letter == letterText );
      if (letterObject === undefined) return;
      playLetterWordAtLetter(letterObject)
      
    })
  });
});

function playLetterWordAtLetter(letter){
  audio.src = letter.audioLetterWordUrl;
  audio.load();
  audio.play();
}