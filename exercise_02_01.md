# 1. Создание объекта всеми возможными способами

## 1. Литеральная нотация

`const count = { foo: 'bar' } // { foo: 'bar' }`

## 2. Конструктор new Object()

```
const count = new Object()
count.foo = 'bar' // { foo: 'bar' }
```

## 3. Объект как ассоциативный массив

```
const count = new Object()
count['foo'] = 'bar' // { foo: 'bar' }
```

## 4. Функция-конструктор, класс

```
function CreateCount(foo) {
  this.foo = foo
}

const count = new CreateCount('bar') // { foo: 'bar' }
```

```
class CountClass {
  constructor(foo) {
    this.foo = foo
  }
}

const count = new CountClass('bar') // { foo: 'bar' }
```

## 5. Object.fromEntries()

```
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
])

const count = Object.fromEntries(entries) // { foo: 'bar', baz: 42 }
```

## 6. Object.create()

```
const proto =  { foo: 'bar' }
const count = Object.create(proto, {
  baz: {
    value: 42
  }
}) // { foo: 'bar', baz: 42 }
```

## 7. Object.assign()

```
const count = Object.assign(
  {},
  { foo: 'bar' },
  { baz: 42 }
) // { foo: 'bar', baz: 42 }
```