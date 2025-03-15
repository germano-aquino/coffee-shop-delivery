import { ProductsListTitle, ProductsListContainer } from './styles'
import { Product } from '../Product'
import { coffeeMenu } from '../../../../utils/menu'

export function ProductsList() {
  return (
  <div>
    <ProductsListTitle>Nossos cafés</ProductsListTitle>
    <ProductsListContainer>
      {coffeeMenu.map(product => {
        return <Product
          key={product.description} 
          {...product}
        />
      })}

    </ProductsListContainer>
  </div>
  )
}