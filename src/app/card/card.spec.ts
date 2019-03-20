import { Card } from './card';
import { CardType } from '../cardType/card-type';
import { Rank } from '../rank/rank';
describe('Card', () => {
  it('should create an instance', () => {
    let rank=Rank.ACE
    let cardType=CardType.CLUB;
    expect(new Card(rank,cardType,"")).toBeTruthy();
  });
});
