const assert = require('node:assert/strict');
const { simulateSession } = require('./simulator.js');

const nominal = simulateSession({ soc: 28, ambient: 24, power: 150 });
assert.equal(nominal.status, 'NOMINAL');
assert.equal(nominal.derate, 0);
assert.ok(nominal.durationMinutes > 0);

const hot = simulateSession({ soc: 18, ambient: 39, power: 250 });
assert.ok(hot.peakTemp > nominal.peakTemp);
assert.ok(hot.derate > 0);

const fault = simulateSession({ soc: 45, ambient: 30, power: 250, scenario: 'fault' });
assert.equal(fault.status, 'CHECK SENSOR');
assert.throws(() => simulateSession({ soc: 120, ambient: 20, power: 150 }));
console.log('ChargeLab simulation tests passed.');
