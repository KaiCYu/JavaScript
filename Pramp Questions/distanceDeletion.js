/*Deletion Distance

The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
We cannot get the same string from both strings by deleting 2 letters or fewer.
Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

Examples:

input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0
Constraints:

[input] string str1
[input] string str2
[output] integer
*/

function deletionDistance(str1, str2) {
  // your code goes here
  return helper(str1, str2);
}

const helper = (str1, str2) => {
  //base case
  
  console.log(str1, str2)

  if (str1.length === 0 ) {
    return str2.length;
  }
  if (str2.length === 0) {
    return str1.length;
  }
  //case1
  if(str1[str1.length - 1] === str2[str2.length - 1]) {
    return helper(str1.slice(0, str1.length - 1), str2.slice(0, str2.length - 1));
  } else {
    //case 2
    return 1 + Math.min(helper(str1.slice(0, str1.length - 1), str2), helper(str1, str2.slice(0, str2.length - 1)));
  }
}

console.log(deletionDistance('fargog', 'rgoog'))

//Recommend your peer to identify the base cases first. That is, cases where one of the strings is the empty string. In this case, the deletion distance is simply the length of the other string. After that, encourage them to try cases that are somewhat similar, such as one string containing 1 or 2 characters.
//If your peer needs additional assistance, help them by hinting toward a recursive relation between the deletionDistance(str1, str2), and the deletionDistance for some prefixes of str1 and str2.
//After they find the relation, you may suggest using Dynamic Programming.
//Case 1: The last character in str1 is equal to the last character in str2. In that case, one may assume that these two characters aren’t deleted, and look at the prefixes that don’t include the last character.
//Case 2: The last character in str1 is different from the last character in str2. In that case, at least one of the characters must be deleted, thus we get the following equation: d(str1,str2) = 1 + min( d(str1.substring(0, n-1), str2), d(str1, str2.substring(0, m-1)) ) where n is the length of str1, m is the length of str2, and d(x,y) is the deletion distance between x and y.

