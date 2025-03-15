import { useContext } from "react";
import { OrderList } from "../OrderList";
import { OrderContainer, PriceContainer, ConfirmOrderButton } from "./styles";
import { OrderContext } from "../../../../contexts/OrderContext";

export function OrderInformation() {
  const { totalCoffeeCost, itemsCartQuantity } = useContext(OrderContext)

  const deliveryFee = 3.5
  const totalCost = deliveryFee + totalCoffeeCost

  return(
    <OrderContainer>
      <OrderList />
      <PriceContainer>
        <p>Total de itens <span>R$ {totalCoffeeCost.toFixed(2)}</span></p>
        <p>Entrega <span>R$ {deliveryFee.toFixed(2)}</span></p>
        <p>Total <span>R$ {totalCost.toFixed(2)}</span></p>
      </PriceContainer>
      <ConfirmOrderButton 
        form="checkoutForm"
        disabled={!itemsCartQuantity}
        type="submit"
      >
        CONFIRMAR PEDIDO
      </ConfirmOrderButton>
    </OrderContainer>
  )
}