// // We want to search a set of English language sentences for a keyword. Every sentence that contains the keyword should be returned.

// const text = `
// Early sales of Apple's new iPhones have lived up to high expectations.

// The strong sales mirror growing consumer demand for smartphones with bigger
// screens. IDC, a research firm, estimated that at least 20 percent of all
// smartphones shipped last year in China, the largest smartphone market in
// the world, were five inches or larger. It also predicted that manufacturers
// this year would ship more "phablets," or smartphones with screens measuring
// at least 5-point-5 diagonal inches, than laptops.

// The company on Monday said it sold more than 10 million of the iPhone 6 and
// 6 Plus models in the first three days they were available in stores. That
// is higher than the nine million new iPhones it sold last year in their
// first weekend on sale. But some analysts, like Gene Munster of Piper
// Jaffray, wondered whether first-weekend sales were still a reliable measure
// for consumer demand.

// The iPhone sales were on the upper end of financial analysts' expectations,
// which ranged from 6 million to the "low teens" of millions of sales.
// `

// // def search_text(text, keyword):
// //   pass

// const searchText = (text, keyword) => {
//   let result = []
//   // console.log(text);
//   //split the text into sentences (by .)
//   let sentences = text.split('.');

//   //search thru each sentence for the keyword
//   for (var i = 0; i < sentences.length; i++) {
//     //if sentence has keyword, push sentence to result
//     if (sentences[i].includes(...keyword)) {
//       result.push(sentences[i]);
//     }
//   }
//   return result; 
// }
// //multiple keywords
// // console.log(searchText(text, ['iPhones', 'Apple']));

// const searchTextWithFilter = (text, keyword) => {
//   let sentences = text.split('.');
//   return sentences.filter((sentence) => {
//     return sentence.includes(...keyword);
//   }, []);
// } 

// console.log(searchTextWithFilter(text, ['iPhones', 'Apple']));

//Given an array of numbers, and a target number, determine if two numbers add to a target.
//return boolean
// var arr = [4, 9, 15, 3, 7, 4];
// var target = 11;

// const findTarget = (arr, target) => {
//    // fill me in 
//   let tempObj = {};
//   let result = [];

//   for (var i = 0; i < arr.length; i++) {
//     tempObj[target - arr[i]] = arr[i];
//   }

//   for (var j = 0; j < arr.length; j++) {
//     if (tempObj[arr[j]]) {
//       result.push(arr[j]);
//       result.push(target - arr[j]);
//       return result;
//     }
//   }
//   return result;
// }

// console.log(findTarget(arr, target));

//Given an array of numbers, and an integer N, find the N minimum and maximum numbers

// sequence = [1, 4, 2.3, 3.14, 9, 3475, 3, 3, 54, 60, 0.1, -3.3]
sequence = [1,2,3];

const minMax = (sequence, n) => {
  let result = [];
  let minArr = [];
  let maxArr = [];

  //sort the array,
  let sorted = sequence.sort((a, b) => {
    return a - b;
  })

  // console.log(sorted);
  for (var i = 0; i < n; i++) {
    // minArr.push(sorted.shift());
    // maxArr.push(sorted.pop());
    minArr.push(sorted[i]);
  }

  for (var j = sorted.length - 1; j >= sorted.length - n; j--) {
    maxArr.push(sorted[j])
  }

  result.push(minArr, maxArr);
  //add first n number elements into min array
  //add last n number elements into max array

  //add min arr and max arr into result

  return result;
}

console.log(minMax(sequence, 2));   //[[-3.3, 0.1], [60, 3475]]
//[[1,2], [2,3]]