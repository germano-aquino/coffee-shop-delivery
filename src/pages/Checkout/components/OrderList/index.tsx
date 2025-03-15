import { useContext } from "react"
import { OrderItem } from "../OrderItem"
import { OrderListContainer } from "./styles"
import { OrderContext } from "../../../../contexts/OrderContext"

export function OrderList() {
  const {coffees} = useContext(OrderContext)
  
  return (
    <OrderListContainer>
      {coffees.map(item => (<OrderItem 
      key={item.id}
      {...item}
      />))}
    </OrderListContainer>
  )
}