# What is Singleton pattern?

The term Singleton describes something that has only a single presence in the program. 
You use it when you want to get hold of a single object instead of many different ones for several reasons. 
For example, maybe you want to keep only one instance of a particular class simply because it is either expensive to create or it does not make sense to keep more than one for the lifetime of the program

### Gloabl access point
	- There is only one access point of its instance

### Instance if cached somewhere
	- cached the instance of the object somewhere so that it can be retrieved on demand

### Instance is created on demand
	- It is created lazily

### Unique instance per class
 	- Different classes hae their own Singletons


# When to use Singleton?
	- control access to external resources such as db connections, API endpoints, or filesystem.

### UML
	| Singleton       |
	===================
	| - instance      |
	-------------------
	| + getInstance() |
	===================


# Classic Implementation

### Step1 - private constructor
- You want to prevent the construction of new objects.
- You should protect against manual creation of the singleton objects.

```code
	export class Singleton {
		private constructor() {}
	}
```


### Step2 - cached instance
- You want to cache the global instance of the Singleton. 
- You want to use a static variable for that as the runtime will ensure only one instance per class in reserved:

```code
	export class Singleton {
		// Store the singleton instance (cached)
		private static instance: Singleton

		// Prevents creation of new instances
		private constructor(){
			
		}
	}
```






