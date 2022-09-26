import {Card} from "./card.model";
import {CardName} from "./cardName.model";

export class JokerCard extends Card{
    constructor(cardName: CardName.LITTLE_JOKER | CardName.BIG_JOKER) {
        super(cardName);
    }

    getColor(): string {
        const colors = new Map<CardName, string>([
            [CardName.LITTLE_JOKER, "black"],
            [CardName.BIG_JOKER, "red"],
        ]);

        return colors.get(this.cardName);
    }

    getSuite(): string {
        return "";
    }
}