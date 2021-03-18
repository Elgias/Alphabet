export const CardType = {
  learnCard: 'learn-card',
  testLetterCard: 'test-letter-card'
}

export class CardGenerator {

  constructor (cardType, parameters){
    this.cardType = cardType;
    this.parameters = parameters;
  }

  get html(){
    if (!this.hasOwnProperty('cardType') || this.cardType == null) return;
    if (!this.hasOwnProperty('parameters') || this.parameters == null) return;

    if (this.cardType == CardType.learnCard){
      if (!this.parameters.hasOwnProperty('imgPath')) return;
      if (!this.parameters.hasOwnProperty('letterColor')) return;
      if (!this.parameters.hasOwnProperty('letter')) return;
      if (!this.parameters.hasOwnProperty('cardText')) return;
      if (!this.parameters.hasOwnProperty('cardTextColor')) return;

      return `
      <div class=" col-4 col-sm-3 col-md-3 col-lg-2 g-2">
        <div class="letter-card-placeholder">
          <div class="letter-card shadow-lg">
            <img class="letter-card--img" src="${this.parameters.imgPath}"></img>
              <span class="letter-card--letter" style="color: ${this.parameters.letterColor}">${this.parameters.letter}</span>
            <span class="letter-card--text" style="color:${this.parameters.cardTextColor}">${this.parameters.cardText}</span>
          </div>
        </div>
      </div>
      `
    }
    else if (this.cardType == CardType.testLetterCard){
      return `
      <div class="col-4 col-sm-3 col-lg-2 col-xl-2 col-xxl-2">
        <div class="letter-card-placeholder">
          <div class="letter-card shadow-lg d-flex justify-content-center align-items-center">
            <span class="letter-card--letter" style="color: #fd6568;">C</span>
          </div>
        </div>
      </div>
      `
    }
  }
}