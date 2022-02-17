``` typescript

// Generic = dynamic, flexible

//Generic Type = 1 type store value of another type

const names: Array<string> = [] // this is just "string[]"

```

``` typescript

// Generic Function

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}


const merge = <T, U>(objA: T, objB: U) => {
  return Object.assign(objA, objB)
}


const merge = <T, U>(objA: T, objB: U): T & U => {
  return Object.assign(objA, objB)
}


// extends here is constraint to make sure the generic type is object in any shape

const merge = <T extends object, U extends object>(objA: T, objB: U): T & U => {
  return  Object.assign(objA, objB)
}


// keyof
const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key]
}

extractAndConvert({ name: 'Max' }, 'name')

```

``` typescript

//Generic Class

class DataStorage<T> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}


const textStorage = new DataStorage<string>()


```


``` typescript
// Generic Utilities Types

//Partial

interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}


let courseGoal: Partial<CourseGoal> = {} // Partial = the property inside obj is optional for now


// Readonly
const name1: Readonly<string[]> = ['Max', 'Sports'] // u cannot push or pop value from array



```