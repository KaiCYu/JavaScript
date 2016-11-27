(function() {
  'use strict';

  var now = new Date();     //current time
  console.log(now);
  console.log(typeof Date());   //string

  var partyTime = new Date(9532187513);
  console.log(partyTime);

  var dob = new Date('january 1 1990');
  console.log(dob);

}());
