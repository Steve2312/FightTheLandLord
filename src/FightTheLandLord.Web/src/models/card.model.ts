import {CardName} from "./cardName.model";

export abstract class Card {
    public cardName: CardName;

    protected constructor(cardName: CardName) {
        this.cardName = cardName;
    }

    abstract getColor(): string;
    abstract getSuite(): string;

    public getArt(): string {
        const arts = new Map<CardName, string>([
            [CardName.Ace, "爱"],
            [CardName.Two,"二"],
            [CardName.Three, "三"],
            [CardName.Four, "四"],
            [CardName.Five, "五"],
            [CardName.Six, "六"],
            [CardName.Seven, "七"],
            [CardName.Eight, "八"],
            [CardName.Nine, "九"],
            [CardName.Ten, "十"],
            [CardName.Jack, "农民"],
            [CardName.Queen, "女王"],
            [CardName.King, "王"],
            [CardName.LITTLE_JOKER, "小丑"],
            [CardName.BIG_JOKER, "大小丑"],
        ]);

        return arts.get(this.cardName);
    }

    public toString(): string {
        const strings = new Map<CardName, string>([
            [CardName.Ace, "A"],
            [CardName.Two, "2"],
            [CardName.Three, "3"],
            [CardName.Four, "4"],
            [CardName.Five, "5"],
            [CardName.Six, "6"],
            [CardName.Seven, "7"],
            [CardName.Eight, "8"],
            [CardName.Nine, "9"],
            [CardName.Ten, "10"],
            [CardName.Jack, "J"],
            [CardName.Queen, "Q"],
            [CardName.King, "K"],
            [CardName.LITTLE_JOKER, "X"],
            [CardName.BIG_JOKER, "X"],
        ]);

        return strings.get(this.cardName);
    }
}