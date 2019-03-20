
import { CardType } from '../cardType/card-type';
import { Rank } from '../rank/rank';
export class Card {
    cardType: CardType;
    rank: Rank;
    image: string;

    constructor(rank: Rank, cardType: CardType, image: string) {
        this.cardType = cardType;
        this.rank = rank;
        this.image = image;
    }

    getCardType(): string {
        return CardType[this.cardType];
    }

    getRank(): string {
        return Rank[this.rank];
    }
    
    imageName(): string {
        return CardType[this.cardType] + "-" + Rank[this.rank] + ".png";
    }


}
