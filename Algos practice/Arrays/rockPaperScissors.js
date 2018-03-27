
const RPS = (rounds, results = [], played = []) => {
  const choices = ['R', 'P', 'S'];
  if (rounds > 0) {
    choices.forEach((choice) => {
      RPS(rounds - 1, results, played.concat(choice));
    })
  } else {
    results.push(played)
  }
  return results;
}

console.log(RPS(3))