module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let speed = turnsSpeed / 3600;
  let seconds = turns / speed;
  return {
    turns: turns,
    seconds: seconds
  }
}