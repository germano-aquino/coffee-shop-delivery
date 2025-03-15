import delivery from '../../assets/Delivery.svg'
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { DeliveryContainer, DeliveryInformationContainer, DeliveryInformationDescription, DescriptionContainer } from "./styles";
import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import { BusinessPoliciesFlexContainer, BusinessPolicyContainer, BusinessPolicyIcon } from '../../components/BusinessPolicies/styles';

function DeliveryPolicies() {
  const { deliveryInformation } = useContext(OrderContext)
  const { street, number, neighborhood, city, state, paymentMethod } = deliveryInformation
  const paymentLabel: Record<string, string> = {
    'credit': 'Cartão de Crédito',
    'debit': 'Cartão de Débito',
    'cash': 'Dinheiro'
  }

  return (
    <BusinessPoliciesFlexContainer>
      <BusinessPolicyContainer>
          <BusinessPolicyIcon iconcolor='purple-500' >{<MapPin weight="fill" size={16}/>}</BusinessPolicyIcon>
          <DeliveryInformationDescription>Entrega em <b>{street}, {number}</b><br/>{neighborhood} - {city}, {state.toUpperCase()}</DeliveryInformationDescription>
      </BusinessPolicyContainer>
      <BusinessPolicyContainer>
        <BusinessPolicyIcon iconcolor='yellow-500' >{<Timer weight="fill" size={16}/>}</BusinessPolicyIcon>
        <DeliveryInformationDescription>Previsão de entrega<br/><b>20 min - 30 min</b></DeliveryInformationDescription>
      </BusinessPolicyContainer>
      <BusinessPolicyContainer>
          <BusinessPolicyIcon iconcolor='yellow-700' >{<CurrencyDollar weight="light" size={16}/>}</BusinessPolicyIcon>
          <DeliveryInformationDescription>Pagamento na entrega<br/><b>{paymentLabel[paymentMethod]}</b></DeliveryInformationDescription>
      </BusinessPolicyContainer>
    </BusinessPoliciesFlexContainer>
  )
}

export function Delivery() {
  return (
    <DeliveryContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <DeliveryInformationContainer>
        <DescriptionContainer>
          {/* <BusinessPolicies 
            policies={policies}
            isDeliveryPage
          /> */}
          <DeliveryPolicies />
        </DescriptionContainer>
        <img src={delivery} alt='' />
      </DeliveryInformationContainer>
    </DeliveryContainer>
  )
}