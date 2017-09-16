function sqrt(x){
  function mean(a,b){
    return (a + b) / 2
  }
  function newEstimate(estimate){
    return mean( estimate, x / estimate )
  }
  function isAproxRoot(estimate){
    return Math.abs(estimate * estimate -x) <= 0.01
  }
  function iterate(estimate){
    return isAproxRoot(estimate) ? estimate : iterate(newEstimate(estimate))
  }
  return iterate(1);
}


console.log(sqrt(9));
console.log(sqrt(16));
console.log(sqrt(11));