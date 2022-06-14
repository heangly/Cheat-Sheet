``` Javascript
	
	## How To Update ##
	
	npm install react@18 react-dom@18
	
	import ReactDOM from 'react-dom/client'
	import App from './App'

	const root = ReactDOM.createRoot(document.getElementById('root'))
	root.render(<App/>)

```

```Javascript

	## Concurrency ##
	
	A new concept & set of features(and APIs) that help with "state update prioritization".
	Urgent state updates can be prioritized over less urgent, long-taking(blocking) updates
	
	-> for react 17, state update happens in order
	
	-> for react 18, you can tell React which state you want to update first by using
		- useTransition()
		- startTransition()

```


```Javascript

	## useTransition() ##
	
	use in functional component
	
	return an array with exactly two values: [isPending, startTransition]

```

```Javascript
	
	## startTransition() ##

	use in places where hook can't be used	
	
	Wrap a state update with "startTransition()" to let React know that it may be handled 	with lower priority

	startTransition(() => setSelectedUser(user))

```

```Javascript
	
	## useDeferredValue() ##
	
	kind of similar to startTransition() but can be used in cases where you don't have full control over the state update. e.g. receiving a stateful value as props
	
	wrap a value and get a deferred(old) value until an updated value is available

	const deferredVal = useDeferredValue(value)

```

```Javascript

	## useId() ## : unique id

	## suspense:  helps with UI update related to code fetching
	
	<Suspense fallback = {<LoadingSpinner/>}>
		<LazyComponent/>
	</Suspense>

```


















