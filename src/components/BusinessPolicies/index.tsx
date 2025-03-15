import { Icon } from "@phosphor-icons/react";
import { 
  BusinessPoliciesGridContainer,
  BusinessPoliciesFlexContainer, 
  BusinessPolicyContainer, 
  BusinessPolicyIcon, 
  IconColors
 } from "./styles";

export interface BusinessPolicyProps {
  description: string,
  color: IconColors,
  Icon: Icon,
  isDeliveryPage?: boolean
}

type BusinessPoliciesProps = {
  policies: BusinessPolicyProps[],
  isDeliveryPage?: boolean
}

function BusinessPolicy({color, description, Icon, isDeliveryPage}: BusinessPolicyProps) {

  return(
    (isDeliveryPage) ? (
      <BusinessPolicyContainer>
        <BusinessPolicyIcon iconcolor={color}>{<Icon weight="fill" size={16}/>}</BusinessPolicyIcon><p>{description}</p>
      </BusinessPolicyContainer>
    ): (
      <BusinessPolicyContainer>
        <BusinessPolicyIcon iconcolor={color}>{<Icon weight="fill" size={16}/>}</BusinessPolicyIcon><p>{description}</p>
      </BusinessPolicyContainer>
    )  
  )
}

export function BusinessPolicies({ policies, isDeliveryPage = false }: BusinessPoliciesProps) {
  return(
    (isDeliveryPage) ? 
    (
      <BusinessPoliciesFlexContainer>
        {policies.map(policy => <BusinessPolicy
          {...policy}
          key={policy.description}
          isDeliveryPage
        />)}
      </BusinessPoliciesFlexContainer>
    ) : (
      <BusinessPoliciesGridContainer>
        {policies.map(policy => <BusinessPolicy
          {...policy}
          key={policy.description}
          isDeliveryPage
        />)}
      </BusinessPoliciesGridContainer>
      
    )
  )
}