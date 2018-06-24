
const Suit = require('./Suit');
const Color = require('./Color');
const Type = require('./Type');

function convertSuitToColor(suit) {
	if (suit === Suit.Spade || suit === Suit.Club) {
		return Color.Black;
	} else if (suit === Suit.Heart || suit === Suit.Diamond) {
		return Color.Red;
	} else {
		return Color.None;
	}
}

class Card {

	constructor(name, suit, number) {
		this._id = 0;
		this._name = name;
		this._suit = suit;
		this._number = number;
		this._color = convertSuitToColor(suit);
	}

	/**
	 * Check if the selected players are feasible
	 * @param {Player[]} selected
	 * @param {Player} source
	 * @return {boolean}
	 */
	targetFeasible(selected, source) {
		return true;
	}

	/**
	 * Check if toSelect is a valid target
	 * @param {Player[]} selected
	 * @param {Player} toSelect
	 * @param {Player} source
	 * @return {boolean}
	 */
	targetFilter(selected, toSelect, source) {
		return !!toSelect;
	}

	/**
	 * Check if this card is available
	 * @param {Player} source
	 * @return {boolean}
	 */
    isAvailable(source) {
		return true;
	}

	/**
	 * The first procedure of using a card
	 * @param {GameDriver} driver
	 * @param {CardUseStruct} use
	 */
	onUse(driver, use) {
	}

	/**
	 * The second procedure of using a card
	 * @param {GameDriver} driver
	 * @param {CardUseStruct} use
	 */
	use(driver, use) {
	}

	/**
	 * This function will be called on every target before effect()
	 * @param {GameDriver} driver
	 * @param {CardEffectStruct} effect
	 */
	onEffect(driver, effect) {
	}

	/**
	 * This function will be called on every target after use()
	 * @param {GameDriver} driver
	 * @param {CardEffectStruct} effect
	 */
	effect(driver, effect) {
	}

	/**
	 * This function will be called after effect() has been executed on every target
	 * @param {GameDriver} driver
	 */
	complete(driver) {
	}

}

Card.Suit = Suit;
Card.Color = Color;
Card.Type = Type;

module.exports = Card;