import { DescriptionContainer, HomeContainer, IntroContainer, Subtitle, Title } from "./styles";
import coffee from "../../assets/coffee.svg"
import { BusinessPolicies, BusinessPolicyProps } from "../../components/BusinessPolicies";
import { ProductsList } from "./components/ProductsList";
import { ShoppingCart, Coffee, Timer, Package } from '@phosphor-icons/react'

export function Home() {
  const policies: BusinessPolicyProps[] = [
    {
      description: 'Compra simples e segura',
      color: "yellow-700",
      Icon: ShoppingCart,
    },
    {
      description: 'Embalagem mantém o café intacto',
      color: 'gray-700',
      Icon: Package,
    },
    {
      description: 'Entrega rápida e rastreada',
      color: 'yellow-500',
      Icon: Timer,
    },
    {
      description: 'O café chega fresquinho até você',
      color: 'purple-500',
      Icon: Coffee
    },
  ]

  return (
    <HomeContainer>
    <IntroContainer>
      <DescriptionContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>
        <BusinessPolicies policies={policies} />
      </DescriptionContainer>
      <img src={coffee} alt=""/>
    </IntroContainer>
    <ProductsList />
    </HomeContainer>
  )
}