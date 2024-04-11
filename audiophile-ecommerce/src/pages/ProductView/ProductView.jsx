import React from 'react'
import ProductPage from '../../Components/ProductPage/ProductPage'

const ProductView = () => {

  const [product, setProduct] = useState('All')
  return (
    <div>
          <ProductPage product={product} setProduct={setProduct} />
    </div>
  )
}

export default ProductView