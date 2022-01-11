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


```