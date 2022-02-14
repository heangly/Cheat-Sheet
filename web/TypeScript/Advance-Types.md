

``` typescript
	Intersection Types:

	type Admin = {
  		name: string
  		privileges: string[]
	}
		
	type Employee = {
  		name: string
  		startDate: Date
	}

	type ElevatedEmployee = Admin & Employee (intersect)

	const e1: ElevatedEmployee = {
  		name: 'heang',
  		privileges: ['create-server'],
  		startDate: new Date()
	}


	type Combinable = string | number
	type Numeric = number | boolean
	type Universal = Combinable & Numeric


	Note: you can also use interface by extends other interface

```

``` typescript
	type Guards:
	
	type Combinable = string | number
	type Numeric = number | boolean
	type Universal = Combinable & Numeric

	function add(a: Combinable, b: Combinable) {
  		if (typeof a === 'string' || typeof b === 'string') {  (this is type guards)
    			return a.toString() + b.toString()
  		}

  		return a + b
	}

	(typeof can be used only with "type" that javascript knows)
	
	or

	function printEmployeeInformation(emp: UnKnownEmployee) {
 
  		if ('privileges' in emp) { 	(use "in")
    			console.log('Privileges: ' + emp.privileges)
  		}
	}

	Want to do type Guard in class?
	
	"if (sth instanceof sth){}    // check the constructor function
```

``` typescript
	Discriminated Union: You have 1 common property for each type of object

	interface Bird {
  		type: 'bird'
  		flyingSpeed: number
	}

	interface Horse {
 		type: 'horse'
  		runningSpeed: number
	}

	type Animal = Bird | Horse

	function moveAnimal(animal: Animal) {
  		let speed = null
  		switch (animal.type) {
    			case 'bird':
      				speed = animal.flyingSpeed
      				break
    			case 'horse':
      				speed = animal.runningSpeed
				break
  	}
}		


```