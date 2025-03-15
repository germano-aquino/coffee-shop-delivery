import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { coffeeImg } from "../../../../utils/CoffeeImages";
import { Amount, ItemContainer, ItemDetails, PriceItemContainer, RemoveFromCart } from "./styles";
import { CoffeeName } from "../../../../utils/menu";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

export interface OrderItemProps {
  name: CoffeeName,
  price: number,
  amount: number,
}

export function OrderItem({name, price, amount}: OrderItemProps) {
  const itemTotalPrice = amount * price
  const { removeCoffeeFromCart, changeCartsCoffeeAmount } = useContext(OrderContext)

  function handleRemoveFromCart() {
    removeCoffeeFromCart(name)
  }

  function handleDecreaseAmount() {
    changeCartsCoffeeAmount({
      name,
      amount: -1
    })
  }

  function handleIncreaseAmount() {
    changeCartsCoffeeAmount({
      name,
      amount: 1})
  }

  return (
    <ItemContainer>
      <img src={coffeeImg[name]} alt=""/>
      <ItemDetails>
        <p>{ name }</p>
        <div>
          <Amount>
            <button type="button" onClick={handleDecreaseAmount}>
              <Minus size={14} />
            </button>
            <span>{ amount }</span>
            <button type="button" onClick={handleIncreaseAmount}>
              <Plus size={14} />
            </button>
          </Amount>
          <RemoveFromCart type="button" onClick={handleRemoveFromCart}>
            <span><Trash size={16} /></span> REMOVER
          </RemoveFromCart>
        </div>
      </ItemDetails>  
      <PriceItemContainer>
        <p>R$ {itemTotalPrice.toFixed(2)}</p>
      </PriceItemContainer>
    </ItemContainer>
  )
}