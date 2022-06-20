``` javascript
# Finding subsequence 
	-> sort array
	-> use pointers
```

``` javascript
# Finding if num in the array 
	-> sort array
	-> use binary search
	or
	-> use obj/map to remember the seen element
```

``` javascript
# Finding & Traversing unique path
	-> dfs backward
	-> if reach [1][1] -> return 1 meaning there is 1 path else return 0
	-> recursively sum left path and right path
```

``` javascript
# Accumulate path value
	-> dynamic programming top down OR bottom up
	-> for DP, always try to think of sub problems
```

``` javascript
# Either bottom, right | Either 1 , 2
	-> do dfs
	-> dfs(firstOption) + dfs(secondOption)
	-> think of it like a root tree branching down 2 sub branch at each call stack
	-> caching the repetitive element to optimize time complexity
```