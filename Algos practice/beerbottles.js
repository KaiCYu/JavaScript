// // function countBeers(tests) {

// // }


// let testCases = [];
// cases = input.split('\n');

// cases = cases.slice(1);
// console.log(cases)  //['10 2 5' , '12 4 4', '6 2 2']
// cases.forEach(testCase => {
//   let n, b, m;
//   testCase = testCase.split(' ');
//   console.log(testCase)
//   n = testCase[0];
//   b = testCase[1];
//   m = testCase[2];
//   count(n, b, m)
// })

function count(totalMoney, perBeer, bottlecapForBeer) {
  totalMoney = Number(totalMoney);
  perBeer = Number(perBeer);
  bottlecapForBeer = Number(bottlecapForBeer);
  console.log(totalMoney);
  if (!(2 <= totalMoney && totalMoney <= 100000) || !(1 <= perBeer && perBeer <= bottlecapForBeer) || !(2 <= bottlecapForBeer && bottlecapForBeer <= totalMoney)) {
    throw new Error('invalid input');
  }

  let beers = 0;
  let caps = 0;

  beers = Math.floor(totalMoney / perBeer);
  caps += beers;

  while (caps >= bottlecapForBeer) {
    caps = caps - bottlecapForBeer + 1;
    beers++;
  }
  return beers;
}

// console.log(count('a', 'b', 'c'));   //6
// console.log(count('10', '2', '5'));   //6
// console.log(count(12, 4, 4));   //3
// console.log(count(6, 2, 2));   //5
// console.log(count(6.5, 3, 2));   //5
// console.log(count(7, 3.5 , 1));   //5
console.log(count(7, 3.5 , 2));   //3
// console.log(count(5, .5, 1));   //5
// console.log(count(5, 2, 1));   //5

// console.log(countBeers([10, 2, 5, 12, 4, 4, 6, 2, 2]))
//6
//3
//5