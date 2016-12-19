(function() {
  'use strict';

  var subHeading = document.getElementsByTagName('h2')[0];
  var header = document.getElementsByTagName('header')[0];

  // subHeading.addEventListener('click', function() {
  //   console.log('The h2 was clicked!');
  // });
  header.addEventListener('click', function(e) {
    console.log(`The ${e.target.nodeName} was clicked!`);
    e.stopPropagation();
  });

  document.addEventListener('click', function() {
    console.log('something was clicked');
  });
  //now anywhere you click, it will log,
  //logs t things when clicking the header

  //with the .stopPropagation, we no longer get 2 logs when clicking on the header

  var anchor = document.createElement('a');
  anchor.textContent = 'google';
  anchor.setAttribute('href', 'http://google.com');
  document.body.appendChild(anchor);
  //creating an element, link to google.com, add to document

  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('navigation prevented');
    e.stopPropagation();
  });

  function mouseenterHandler() {
    console.log('the mouse is in the header');
  }
  header.addEventListener('mouseenter', mouseenterHandler);

  header.removeEventListener('mouseenter', mouseenterHandler);







}());
