class AlphabetTest {
  letters
  answerLetter

  lettersPool
  constructor(lettersArray){
    this.letters = [0,0,0];
    this.lettersPool = [...lettersArray];

    this.letters = this.letters.map(x => {
      const letterIndex = this.randomLetterIndex(this.lettersPool);  
      return this.lettersPool.splice(letterIndex, 1)[0];
    });

    this.answerLetter = Object.assign({}, this.letters[this.randomLetterIndex(this.letters)]);
    console.log(this.letters)
  }

  /**
   * @param {Array} source 
   *  */ 
  randomLetterIndex(source){
    if(source == undefined || !Array.isArray(source) ) return -1;
    return Math.floor(Math.random() * Math.floor(source.length));
  }
}

