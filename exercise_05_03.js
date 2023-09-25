const iterateWithDelay = (arr) => {
  arr.forEach((el, i) => {
    const delay = (i+1) * 3000;
    setTimeout(() => console.log(i), delay)
  });
};

const arr = [10, 12, 15, 21];

iterateWithDelay(arr);
