# 2. Копирование объекта всеми возможными способами

## 1. Spread

```
const user = {
  name: 'Igor',
  age: 39
}

const clone = { ...user }
```

## 2. JSON.stringify()

```
const user = {
  name: 'Igor',
  age: 39
}

const clone = JSON.parse(JSON.stringify(user))
```

## 3. Object.assign()

```
const user = {
  name: 'Igor',
  age: 39
}
const clone = Object.assign({}, user)

```

## 4. Поверхностное копирование с помощью самонаписанной функции

```
const user = {
  name: 'Igor',
  age: 39
}

const cloneObject = (src) => Object.keys(src).reduce( (acc, cur) => ({...acc, [cur]: src[cur]}), {})

const clone = cloneObject(user)
```

## 5. Глубокое копирование с помощью самонаписанной функции (условно, пишется под конкретную ситуацию)

```
function cloneObject(src) {
  if (src === null || typeof src !== "object") return src
  const result = Array.isArray(src) ? [] : {}
  for (const key of Object.keys(src)) {
    result[key] = cloneObject(src[key])
  }
  return result
}

const user = {
  name: "Igor",
  age: 39,
  permissions: {
    read: true,
    write: false,
    allowedDocs: [1, 2, 3, 4]
  }
}

const clone = cloneObject(user)
```

## 6. structuredClone() 

```
const user = {
  name: "Igor",
  age: 39,
  permissions: {
    read: true,
    write: false,
    allowedDocs: [1, 2, 3, 4]
  }
}

const clone = structuredClone(user)
```

## 7. Внешние библиотеки

```
import cloneDeep from 'lodash.clonedeep'

const user = {
  name: "Igor",
  age: 39,
  permissions: {
    read: true,
    write: false,
    allowedDocs: [1, 2, 3, 4]
  }
}

const clone = cloneDeep(user)
```