
function isMatch(pattern, str){

  var map = {}; //store the pairs of pattern and strings

  function checkMatch(pattern, str) {
    if (pattern.length == 0 && str.length == 0){
      return true;
    }
    //if the pattern or the string is empty
    if (pattern.length == 0 || str.length == 0){
      return false;
    }
    //store the next pattern
    var currentPattern = pattern.charAt(0);
    if (currentPattern in map){
      //the pattern has alredy seen, check if there is a match with the string
      if (str.length >= map[currentPattern].length  && str.startsWith(map[currentPattern])){
        //there is a match, try all other posibilities
        return checkMatch(pattern.substring(1), str.substring(map[currentPattern].length));
      } else {
        //no match, return false
        return false;
      }
    }
    //the current pattern is new, try all the posibilities of current string
    console.log('map' , map)
    console.log('string', str, 'pattern', pattern)
    for (var i=1; i <= str.length; i++){
      var stringToCheck = str.substring(0, i);
      //store in the map
      map[currentPattern] = stringToCheck;
      //try the rest
      var match = checkMatch(pattern.substring(1), str.substring(i));
      // console.log(match)
      if (match){
        //there is a match
        return true;
      } else {
        //if there is no match, delete the pair from the map
        delete map[currentPattern];
      }
    }
    return false;
  }

  return checkMatch(pattern, str);
}

// console.log(isMatch('abba', 'redbluebluere˜d'));
console.log(isMatch('aba', 'redbluered'))