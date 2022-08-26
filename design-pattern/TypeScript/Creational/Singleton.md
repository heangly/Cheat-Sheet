# What is Singleton pattern?

The term Singleton describes something that has only a single presence in the program. 
You use it when you want to get hold of a single object instead of many different ones for several reasons. 
For example, maybe you want to keep only one instance of a particular class simply because it is either expensive to create or it does not make sense to keep more than one for the lifetime of the program

## Gloabl access point
	- There is only one access point of its instance

## Instance if cached somewhere
	- cached the instance of the object somewhere so that it can be retrieved on demand

## Instance is created on demand
	- It is created lazily

## Unique instance per class
 	- Different classes hae their own Singletons


# When to use Singleton?
	- control access to external resources such as db connections, API endpoints, or filesystem.

## UML
	| Singleton       |
	===================
	| - instance      |
	-------------------
	| + getInstance() |
	===================











	
