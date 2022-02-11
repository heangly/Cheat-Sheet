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
