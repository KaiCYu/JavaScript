function zombieCluster(zombies) {
  let count = 0;

  if (!zombies.length) {
    return 0;
  }

  //convert the strings to array of integers
  for (var i = 0; i < zombies.length; i++) {
    let temp = zombies[i].split('');
    for (var j = 0; j < temp.length; j++) {
      temp[j] = parseInt(temp[j]);
    }
    zombies[i] = temp;
  }

  for (var x = 0; x < zombies.length; x++) {
    for (var y = 0; y < zombies[x].length; y++) {
      if (zombies[x][y] === 1) {
        recurse(zombies, x, y);
        count++;
      }
    }
  }
  return count;
}

function recurse(zombies, x, y) {
  if (x < 0 || zombies[x] === undefined || x >= zombies.length || y < 0 || y >= zombies[0].length || zombies[x][y] === 0 || zombies[x][y] === undefined) {
    return;
  }

  zombies[x][y] = 0;

  recurse(zombies, x + 1, y);
  recurse(zombies, x - 1, y);
  recurse(zombies, x, y + 1);
  recurse(zombies, x, y - 1);
}

let z1 = ['1100', 
          '1110',
          '0110',
          '0001' 
        ]

let z2 = ['10000', 
          '01000', 
          '00100', 
          '00010', 
          '00001'];

let z3 = ['0001', 
          '001', 
          '0010',];

let z4 = []

let z5 = ['1', 
          '1']

let z6 = ['11']

console.log(zombieCluster(z1) === 2);  //2
console.log(zombieCluster(z2) === 5);  //5
console.log(zombieCluster(z3) === 2);  //2
console.log(zombieCluster(z4) === 0);  //0
console.log(zombieCluster(z5) === 1);  //1
console.log(zombieCluster(z6) === 1);  //1