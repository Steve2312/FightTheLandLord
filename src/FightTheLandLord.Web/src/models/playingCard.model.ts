import {Suit} from "./suit.model";
import {Card} from "./card.model";
import {CardName} from "./cardName.model";

export class PlayingCard extends Card {
    private readonly suit: Suit;

    constructor(cardName: CardName, suit: Suit) {
        super(cardName);
        this.suit = suit;
    }

    public getSuite(): string {
        const suits = new Map<Suit, string>([
            [Suit.CLUBS, "♣"],
            [Suit.DIAMONDS, "♦"],
            [Suit.HEARTS, "❤"],
            [Suit.SPADES, "♠"],
        ]);
        return suits.get(this.suit);
    }

    public getColor(): string {
        const colors = new Map<Suit, string>([
            [Suit.CLUBS, "black"],
            [Suit.DIAMONDS, "red"],
            [Suit.HEARTS, "red"],
            [Suit.SPADES, "black"],
        ]);

        return colors.get(this.suit);
    }
}