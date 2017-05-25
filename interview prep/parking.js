function solution(E, L) {
  // write your code in JavaScript (Node.js 6.4.0)
  let enter = E.split(':');
  let leave = L.split(':');
  let timeParked = [leave[0] - enter[0], leave[1] - enter[1]];

  let total = 0;

  if (timeParked[0] < 0) {
    timeParked[0] += 24;
  }

  if (timeParked[0] === 0 && timeParked[1] === 0) {
    return total;
  }

  console.log(timeParked)
  //entrance fee
  if (timeParked[0] > 0 || timeParked[1] > 0) {
    total = 2;
  }

  //first hour
  if (timeParked[0] > 0 || timeParked[1] > 0) {
    total += 3;
    timeParked[0] -= 1;
  }

  //every hour after that
  while (timeParked[0] > 0) {
    timeParked[0] -= 1;
    total += 4
  }
  // last partial hour 
  if (timeParked[1] > 0) {
    total += 4;
  }

  return total;
}

// console.log(solution('10:00', '13:21'));
console.log(solution('10:00', '10:21'));
// console.log(solution('00:00', '00:21'));
// console.log(solution('23:00', '00:21'));
// console.log(solution('23:00', '23:00'));
// console.log(solution('10:00', '12:00'));