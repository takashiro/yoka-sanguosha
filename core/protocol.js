

const net = require('../../../core/protocol');
const Enum = require('./Enum');

const cmd = new Enum(
	...net.enums,
	'StartGame',
	'ArrangeSeats',
	'ChooseGeneral',
	'UpdatePlayer',
	'ToBattle',
);

module.exports = cmd;