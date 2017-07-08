const dataSet1 = ['a', 'b', 'c']
const dataSet2 = ['a', 'b', 'd', 'e']

const intersection = (set1, set2) => {
  let result = [];
  let temp = {};

  for (var i = 0; i < set1.length; i++) {
    temp[set1[i]] = set1[i];
  }

  for (var j = 0; j < set2.length; j++) {
    if (temp[set2[j]]) {
      result.push(set2[j]);
    }
  }
  
  return result;
}



console.log(intersection(dataSet1, dataSet2));