import { useDeferredValue } from 'react'

function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products)

  return (
    <ul>
      {deferredProducts.map((product, idx) => (
        <li key={idx}>{product}</li>
      ))}
    </ul>
  )
}

export default ProductList
