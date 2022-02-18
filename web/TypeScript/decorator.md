``` typescript

	//Decorator: run immediate when you first define your class
	// decorator is like a wrapper over class, function, property, parameters


	function Loggger(constructor: Function) {
  		console.log('Loggin...')
  		console.log(constructor) // constructor here is the whole class Person
	}

	@Loggger
	class Person {
  		name = 'Max'

  		constructor() {
    			console.log('Creating person object...')
  		}
	}


```

``` typescript

	// Decorator Factories

	function Loggger(logString: string) {
  			return function (constructor: Function) {
    			console.log(logString)
    			console.log(constructor)
  		}
	}

	@Loggger('LOGGING - PERSON')
	class Person {
  		name = 'Max'

  		constructor() {
    			console.log('Creating person object...')
  		}
	}




	// another example
	function WithTemplate(template: string, hookId: string) {
  		return function (constructor: any) {
    			const hookEl = document.querySelector(`#${hookId}`)
    			const p = new constructor()
    			
			if (!hookEl) return
    			hookEl.innerHTML = template
    			hookEl.querySelector('h1')!.textContent += p.name
  		}
	}

	@WithTemplate('<h1> My person object </h1>', 'app')
	class Person {
 		name = 'Max'

  		constructor() {
    			console.log('Creating person object...')
  		}
	}


```

``` typescript

	@Loggger('')
	@WithTemplate('<h1> My person object </h1>', 'app')
	class Person {
  		name = 'Max'

  		constructor() {
    			console.log('Creating person object...')
  		}
	}

	//which order of decorator run first?
	// -- for the inner function, it goes from bottom to top (@WithTemplate runs first)
	// -- for outside function, it goes top to bottom normally
```

``` typescript

	const Log = (target: any, propertyName: string) => {
  		console.log(target)
  		console.log(propertyName)
	}

	class Product {
  		@Log		// WHEN put above property, it has second argument for that 1 property
  		private _price: number
  		title: string
	}

	


	///


	function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
		//name is the name of the accessor -> price, descriptor tell it is a 'setter'
	}

	class Product {
  		private _price: number
  		title: string

  		@Log2
  		set price(val: number) {
    		if (val > 0) {
      			this._price = val
    		} else {
      			throw new Error('Invalid price - should be positive!')
    		}
  	}


```