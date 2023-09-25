function doSmth() {
  return Promise.resolve("123");
}

doSmth()
.then(function (a) {
  console.log("1", a); //123
  return a;
})
.then(function (b) {
  console.log("2", b); //123
  return Promise.reject("321");
})
.catch(function (err) {
  console.log("3", err); //321
})
.then(function (c) {
  console.log("4", c); //undefined
return c;
});
