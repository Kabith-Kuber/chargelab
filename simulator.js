function simulateSession({ soc, ambient, power, scenario = 'normal' }) {
  if (soc < 0 || soc > 100) throw new Error('State of charge must be between 0 and 100.');
  if (power <= 0) throw new Error('Charging power must be positive.');
  const stress = Math.max(0, ambient - 25) * 1.7 + Math.max(0, power - 150) * 0.09 + (scenario === 'fault' ? 14 : 0);
  const peakTemp = Math.round(ambient + 13 + stress * 0.52);
  const derate = peakTemp > 48 ? Math.min(0.42, (peakTemp - 48) / 45) : 0;
  const effectivePower = power * (1 - derate);
  const durationMinutes = Math.round(((80 - soc) * 0.75 / effectivePower) * 60 + 11);
  const healthScore = Math.max(52, Math.round(98 - stress * 0.58));
  return { peakTemp, derate, effectivePower, durationMinutes, healthScore, status: scenario === 'fault' ? 'CHECK SENSOR' : peakTemp > 58 ? 'DERATE' : 'NOMINAL' };
}

if (typeof module !== 'undefined') module.exports = { simulateSession };
