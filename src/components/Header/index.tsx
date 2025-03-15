import { HeaderContainer, ItemsQuantityContainer, LocationContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeeLogo from '../../assets/Logo.svg'
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Header() {
  const { deliveryInformation, itemsCartQuantity } = useContext(OrderContext)

  const { city, state } = deliveryInformation
  return (
    <HeaderContainer>
      <NavLink to="/" title="Página Inicial">
        <img src={coffeeLogo} alt="" />
      </NavLink>
      <div>
        {(!city && !state) ? (
           <LocationContainer><MapPin size={22} weight="fill"/><span>{city}, {state.toUpperCase()}</span></LocationContainer>
        ): (
          <LocationContainer><MapPin size={22} weight="fill"/><span>Belém, PA</span></LocationContainer>
        )}
        <NavLink to="/checkout" title="Carrinho de compras">
          <ShoppingCart size={22} weight="fill"/>
        </NavLink>
        {!!itemsCartQuantity && <ItemsQuantityContainer>{itemsCartQuantity}</ItemsQuantityContainer>}
      </div>
    </HeaderContainer>
  )
}