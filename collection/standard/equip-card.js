
const WeaponCard = require('../WeaponCard');
const ArmorCard = require('../ArmorCard');

class KylinBow extends WeaponCard {

	constructor(suit, number) {
		super('kylin-bow', suit, number);
	}

}

class Axe extends WeaponCard {

	constructor(suit, number) {
		super('axe', suit, number);
	}

}

class Spear extends WeaponCard {

	constructor(suit, number) {
		super('spear', suit, number);
	}

}

class QinggangSword extends WeaponCard {

	constructor(suit, number) {
		super('qinggang-sword', suit, number);
	}

}

class Crossbow extends WeaponCard {

	constructor(suit, number) {
		super('crossbow', suit, number);
	}

}

class YinyangSword extends WeaponCard {

	constructor(suit, number) {
		super('yinyang-sword', suit, number);
	}

}

class FrostSword extends WeaponCard {

	constructor(suit, number) {
		super('frost-sword', suit, number);
	}

}

class EightDiagram extends ArmorCard {

	constructor(suit, number) {
		super('eight-diagram', suit, number);
	}

}

class RenwangShield extends ArmorCard {

	constructor(suit, number) {
		super('renwang-shield', suit, number);
	}

}

module.exports = {
	KylinBow,
	Axe,
	Spear,
	QinggangSword,
	Crossbow,
	YinyangSword,
	FrostSword,

	EightDiagram,
	RenwangShield,
};
