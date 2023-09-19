//Полифил к bind()

function myBind(obj, ...args) {
  const f = this;
  return function(...innerArgs) {
    return f.apply(obj, [...args, ...innerArgs])
  }
}

Function.prototype.myBind = myBind;
