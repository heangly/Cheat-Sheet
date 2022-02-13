	The core primitive types in TypeScript are all lowercase!

``` typescript 

	number		:	1, 5.3, -10

	string		:	'Hi', "Hi", `Hi`

	boolean		:	true, false
	
	
	object		: 	const person: { name: string ; age: number } = {
  					name: 'Heang',
 					age: 30
				}

	Array		:	string[] / (string | number)[] / any[]
	
	Tuple		:	[number, string] 	// fixed length array or type

	enum		:	enum Something { 
					ADMIN, READ_ONLY, AUTHOR  // Something.ADMIN will have value 0
				}
				
				enum Something {
					ADMIN = 'heang'	  //Something.ADMIN will have value 'heang'
				}

				// enum can have mixed type inside

	any		:	any kind of type

	union		: 	(string | number)

	type Alias 	:	type [any name] = [any type]    // create your own custom type
				type Combinable = 'as-number' | 'as-text'
	
	unknown		: 	similar to 'any' however if you want to pass unknown type variable to a typed variable, you must do "if (typeof sth === 'string')" 

	void		:	it return nothing or undefined
	
	never		: 	will never product any value. eg. function sth(){
									throw new Error('sth')
									}
				or infinite loop
```

``` typescript

	const add = (n1: number, n2: number): number => {
  		return n1 + n2
	}


	let combineValues: Function 	//Function is a special type in typescript
	combineValues = add

		or

	let combineValues: (n1: number, n2: number) => number // dont get confused with function as type VS return type from function
	combineValues = add
```


Interface

```typescript
	interface Person {
  		readonly name: string
  		age?: number	//age is optional, so u can implement it or not implement it

  		greet(phrase: string): void
	}

	(this is similar to type alias)

	const user1: Person = {
  		name: 'Heang',
  		age: 29,
  		greet(phrase: string) {
    			console.log(`${phrase} ${this.name}`)
  		}
	}

	(use interface for class)
	
	class Student implements Person{
		constructor(private name: string, private age: number){}
		
		greet(phrase: string){
			//do sth
		}
	}

	(interface never have concrete implementation while "abstract class" may or may not have)
	
	(interface can also extends from other interface)

	interface A extends B{
		//do sth
	}

	(interface as function type)

	interface AddFn {
		(a: number, b: number): number
	}

```


