import { PlayerPhase } from '@karuta/sanguosha-core';

import GameEvent from '../../driver/GameEvent';
import CardConstraint from '../../driver/CardConstraint';
import AbstractStrikeRule from './AbstractStrikeRule';

export default class StrikeLimitRule extends AbstractStrikeRule<CardConstraint> {
	constructor() {
		super(GameEvent.CheckingCardConstraint);
	}

	isTriggerable(constraint: CardConstraint): boolean {
		const { player, card } = constraint;
		return player.getPhase() === PlayerPhase.Play && this.isStrike(card);
	}

	async process(constraint: CardConstraint): Promise<boolean> {
		const { player } = constraint;
		constraint.available = player.getUseCount('strike') < player.getUseLimit('strike');
		return false;
	}
}
