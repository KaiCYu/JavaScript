function time() {
  let current = new Date();
  console.log(current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds());
}
setInterval(time, 1000);
