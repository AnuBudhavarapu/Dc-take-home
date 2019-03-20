import { Component, OnInit } from '@angular/core';
import { Deck } from "../app/deck/deck"
declare let require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Deck-of-cards';
  public totalCardsLeft: number = 51;
  public imageArray = new Array();
  constructor() {
  }
  public cardsLeft: number = this.totalCardsLeft;
  public isEdited: boolean = false;
  public isDisabled: boolean = false;
  public modifiedImageArray = new Array();
  public deck = new Deck();
  // gets all the cards from the deck and returns images
  getAllCards() {
    this.reset();
    let imageArray = this.deck.getAllCardsFortheDeck();
    return imageArray;
  }
  //gets the shuffled cards from deck and displays it 
  getshuffledCards() {
    this.isEdited = false;
    let gallery = document.getElementById("cardGallery");
    let imgArray = this.deck.getShuffledCardDeck(this.imageArray);
    for (let i = 0; i < imgArray.length; i++) {
      gallery.appendChild(imgArray[i]);
    }
    this.cardsLeft = -1;
    this.isDisabled = true;
  }
  /*gives out one card for every click and count is displayed
  after all the cards are dealt and value is zero and if still the 
  user click on it the deal  button is disabled*/
  dealOne() {
    this.isEdited = true;
    let imgArray = this.modifiedImageArray;
    if (this.cardsLeft == this.totalCardsLeft) {
      imgArray = this.deck.getShuffledCardDeck(this.imageArray);
      this.modifiedImageArray = imgArray;
    }
    let gallery = document.getElementById("cardGallery");
    if (this.cardsLeft != -1) {
      gallery.appendChild(imgArray[this.cardsLeft]);
      this.cardsLeft -= 1;
    }
    else {
      this.isEdited = false;
      this.isDisabled = true;
    }
  }
  //removes all the cards from the deck
  reset() {
    this.cardsLeft = this.totalCardsLeft;
    let gallery = document.getElementById("cardGallery");
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
      this.isDisabled = false;
      this.isEdited=false;
    }
  }
  ngOnInit() {
    this.isDisabled = false;
    this.imageArray = this.getAllCards();
    let shuffleBtn = document.getElementById("shuffle") as HTMLButtonElement;
    shuffleBtn.addEventListener("click", (e: Event) => this.getshuffledCards());
    let resetBtn = document.getElementById("reset") as HTMLButtonElement;
    resetBtn.addEventListener("click", (e: Event) => this.reset());
    let dealBtn = document.getElementById("dealOne") as HTMLButtonElement;
    dealBtn.addEventListener("click", (e: Event) => this.dealOne());
  }
}
