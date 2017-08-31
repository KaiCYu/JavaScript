//There's a monthly raffle in a middle school. 
//A winner is picked for each grade. 
//How would you store and then select a random winner each month?  

let students = {
  grade6: [
    {name: 'bob'},
    {name: 'tom'},
    {name: 'kai'}
  ],
  grade7: [
    {name: 'sally'},
    {name: 'cherry'},
    {name: 'jessica'},
  ],
  grade8: [
    {name: 'billy'},
    {name: 'gabe'},
    {name: 'dale'},
  ],
}

const raffle = (students) => {
  let result = [];
  for(let grade in students) {
    let randomIndex = Math.floor(Math.random() * students[grade].length);
    result.push(students[grade][randomIndex].name);
  }
  return result;
}


console.log(raffle(students));