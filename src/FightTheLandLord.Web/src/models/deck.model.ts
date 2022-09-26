import {Card} from "./card.model";
import {Suit} from "./suit.model";
import {CardName} from "./cardName.model";
import {PlayingCard} from "./playingCard.model";
import {JokerCard} from "./jokerCard.model";

export class Deck {
    public cards: Card[] = [];

    constructor() {
        const suits: Suit[] = [Suit.CLUBS, Suit.HEARTS, Suit.SPADES, Suit.DIAMONDS];
        const cardNames = [
            CardName.Ace,
            CardName.Two,
            CardName.Three,
            CardName.Four,
            CardName.Five,
            CardName.Six,
            CardName.Seven,
            CardName.Eight,
            CardName.Nine,
            CardName.Ten,
            CardName.Jack,
            CardName.Queen,
            CardName.King
        ];

        suits.forEach(suit => {
            cardNames.forEach(cardName => {
                this.cards.push(new PlayingCard(cardName, suit));
            });
        });

        this.cards.push(new JokerCard(CardName.LITTLE_JOKER));
        this.cards.push(new JokerCard(CardName.BIG_JOKER));

        console.log(this.cards)
    }
}