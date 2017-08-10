const fs = require('fs');

//days do not need to be used
const readFile = (input) => {
  let days, windowSize, arr;
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw new Error(err);
    days = data.split('')[0];
    windowSize = data.split('')[2];
    arr = data.split('\n')[1].split(' ');
    console.log('days', days, 'windowsize', windowSize);
    console.log('arr', arr)
    subranges(days, windowSize, arr);
  })
}

const subranges = (days, windowSize, data) => {
  windowSize = parseInt(windowSize);
  let maxWindows = days - windowSize + 1
  let allWindows = [];
  console.log('maxwindow', maxWindows)

  for (var start = 0; start < maxWindows; start++) {
    let window = [];
    let windowCount = 0;

    while (windowCount < windowSize ) {
      // console.log('windowCount', windowCount);
      window.push(data[start + windowCount]);
      windowCount++;
    }
    // console.log('window', window)
    if (window.length === windowSize) {
      allWindows.push(window);
      window = [];
    }
  }

  console.log(allWindows)

  let allSubranges = [];
  allWindows.forEach(window => {
    let subrange = [];
    for (let i = 2; i <= window.length; i++) {
      for (var j = 0; j <= window.length - i; j++) {
        console.log('slicing', window.slice(j, i + j))
        // console.log('subrange', subrange);
        subrange.push(isSubrangeIncreasing(window.slice(j, i + j)));
      }
    }
    console.log('subrange', subrange)
    subrange = subrange.reduce((sum, value) => {
      return sum + value;
    }, 0);
    allSubranges.push(subrange);
    console.log(subrange);
  })

  console.log('all sub ranges', allSubranges);

}

const isSubrangeIncreasing = (subrange) => {
  let increasing = true;
  let decreasing = true;
  // console.log(subrange)
  for (var i = 0; i < subrange.length - 1; i++) {
    //first number is smaller than 2nd number
    if (subrange[i] < subrange[i + 1]) {
      decreasing = decreasing && false;
      increasing = increasing && true;
    } else if (subrange[i] > subrange[i + 1]) {
      decreasing = decreasing && true;
      increasing = increasing && false;
    }
    // console.log('inc', increasing, 'dec', decreasing);
  }
  if (increasing && decreasing) {
    return 0;
  } else if (!increasing && !decreasing) {
    return 0
  } else if (increasing) {
    return 1;
  } else if (decreasing) {
    return -1;
  }
}

// console.log(isSubrangeIncreasing([1,2,3]))  //1 
// console.log(isSubrangeIncreasing([3,2,1]))  //-1
// console.log(isSubrangeIncreasing([1,3,2]))  //0
// console.log(isSubrangeIncreasing([201345,154243]))  //0
// console.log(isSubrangeIncreasing([154243,154243]))  //0
// console.log(isSubrangeIncreasing([201345,154243,154243]))  // -1
// console.log(isSubrangeIncreasing([1,1])) 

console.log(readFile())
//3
//0
//-1