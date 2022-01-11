``` javascript

const debounce = (func, delay = 1000) => {
  let timeoutId = null

  return (...args) => {
    timeoutId && clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
  
}

const onInputChange = (e) => {
  fetchData(e.target.value)
}

input.addEventListener('input', debounce(onInputChange, 500))


```