let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

promiseTwo
.then((res) => {
  return res + "b";
})
.then((res) => {
  return res + "с";
})
.finally((res) => {
  return res + "!!!!!!!";
})
.catch((res) => {
  return res + "d";
})
.then((res) => {
  console.log(res); // abc
});
