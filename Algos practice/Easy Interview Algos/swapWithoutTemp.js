const swapWithoutTemp = (a, b) => {
  console.log(a, b);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log(a, b);
}
console.log(swapWithoutTemp(2, 3));