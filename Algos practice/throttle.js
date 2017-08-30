const throttle = (func, delay) => {
  let running = false;
  return function () {
    let args = Array.from(arguments);  
    if (!running) {
      running = true;
      func.apply(null, args);
      setTimeout(() => {running = false}, delay);
    }
  }
}

var returnedFunc = throttle( (name)=>{console.log('hi ' + name)}, 300 );

returnedFunc('Han');
returnedFunc('Kai');
returnedFunc('Hercules');