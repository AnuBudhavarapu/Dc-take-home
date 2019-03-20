
import { Card } from "../card/card"
import { CardType } from '../cardType/card-type';
import { Rank } from "../rank/rank"
declare let require: any;
export class Deck {
    cardTypes: CardType[]= [CardType.SPADE, CardType.CLUB, CardType.DIAMOND, CardType.HEART];
    ranks: Rank[] = [Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING];
    card: { rank: Rank, CardType: CardType };

    constructor() {
    }
    //Add all the cards to the deck for display
    getAllCardsFortheDeck() {
        let imgArray = new Array();
        let count = 0;
        let deck = [];
        this.cardTypes.forEach((type) =>
            this.ranks.forEach((rank) => {
                let playCard = new Card(rank, type, "");
                playCard.imageName = require('../../assets/' + playCard.imageName());
                imgArray[count] = new Image();
                imgArray[count].src = playCard.imageName;
                deck.push(playCard)
                count = count + 1;
            }));

        return imgArray;
    }
   //Shuffles the cards based on randomly generated number
    getShuffledCardDeck(imageArray) {
        let imgArray = new Array();
        imgArray = imageArray;
        let currentVal = imgArray.length;
        while (currentVal !== 0) {
            let randomNum = Math.floor(Math.random() * Math.floor(currentVal));
            currentVal -= 1;
            let interChange = imgArray[currentVal];
            imgArray[currentVal] = imgArray[randomNum];
            imgArray[randomNum] = interChange;
        }
        return imgArray;
    }

}
