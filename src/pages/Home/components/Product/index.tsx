import { ShoppingCartSimple, Plus, Minus } from '@phosphor-icons/react'
import { ProductContainer, Name, Description, ProductFooter, Price, Amount, AddToCart, CoffeeLabelContainer } from './styles'
import { coffeeImg } from '../../../../utils/CoffeeImages'
import { useContext, useState } from 'react'
import { CoffeeProps } from '../../../../utils/menu'
import { OrderContext } from '../../../../contexts/OrderContext'

export function Product({ coffeeLabel: preparationMethod, name, description, price }: CoffeeProps) {
  const [amount, setAmount] = useState(1)
  const { changeCartsCoffeeAmount } = useContext(OrderContext)


  function handleIncreaseAmount() {
    setAmount(state => state + 1)
  }

  function handleDecreaseAmount() {
    if (amount > 1) {
      setAmount(state => state - 1)
    }
  }

  function handleAddToCart() {
    changeCartsCoffeeAmount({
      name,
      amount
    })
    setAmount(1)
  }

  return(
    <ProductContainer>
      <img src={coffeeImg[name]} alt=""/>
      <CoffeeLabelContainer>
        {preparationMethod.map(method => {
          return <p>{method}</p> 
        })}
      </CoffeeLabelContainer>
      <Name>{ name }</Name>
      <Description>{ description }</Description>
      <ProductFooter>
        <Price><span>R$</span>{ price.toFixed(2) }</Price>
        <Amount>
          <button onClick={handleDecreaseAmount}>
            <Minus size={14} />
          </button>
          <span>{ amount }</span>
          <button onClick={handleIncreaseAmount}>
            <Plus size={14}/>
          </button>
        </Amount>
        <AddToCart onClick={handleAddToCart}>
          <ShoppingCartSimple size={22} weight='fill'/>
        </AddToCart>
      </ProductFooter>
    </ProductContainer>
  )
}