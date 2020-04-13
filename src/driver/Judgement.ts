import {
	Card,
	JudgementStruct,
} from '@karuta/sanguosha-core';

import CardPattern from '../core/CardPattern';

import ServerPlayer from './ServerPlayer';

export default class Judgement {
	readonly who: ServerPlayer;

	readonly origin: Card | string;

	readonly pattern: CardPattern;

	pending: boolean;

	effective: boolean;

	card?: Card;

	history: Card[];

	constructor(who: ServerPlayer, origin: Card | string, pattern: CardPattern) {
		this.who = who;
		this.origin = origin;
		this.pattern = pattern;
		this.pending = true;
		this.effective = false;
		this.history = [];
	}

	change(card: Card): void {
		if (this.card) {
			this.history.push(this.card);
		}
		this.card = card;
	}

	execute(): void {
		this.effective = this.card ? this.pattern.match(this.card) : false;
	}

	get cards(): Card[] {
		const cards = [...this.history];
		if (this.card) {
			cards.push(this.card);
		}
		return cards;
	}

	toJSON(): JudgementStruct {
		return {
			who: this.who.getSeat(),
			origin: typeof this.origin === 'string' ? this.origin : this.origin.toJSON(),
			pending: this.pending,
			effective: this.effective,
			card: this.card ? this.card.toJSON() : undefined,
		};
	}
}
