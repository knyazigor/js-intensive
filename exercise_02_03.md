# 3. Создание функции всеми возможными способами

## 1. Function Declaration

```
function makeCounter() {
  let count = 0
  return function() {
    return count++;
  }
}
```

## 2. Function Expression

```
const makeCounter = function() {
  let count = 0;
  return function() {
    return count++;
  }
}
```

## 3. Named Function Expression

```
const makeCounter = function innerMakeCounter() {
  let count = 0;
  return function() {
    return count++;
  }
}
```

## 3. Arrow function
```
const makeCounter = () => {
  let count = 0;
  return () => count++;
}
```

## 4. new Function()

```
const makeCounter = new Function(
  'let count = 0; return () => count++'
);
```