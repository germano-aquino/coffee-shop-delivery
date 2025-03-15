import styled from "styled-components";
import { IconProp } from "../../../../components/BusinessPolicies/styles";

export const Title = styled.p`
  color: ${props => props.theme["gray-800"]}
`

export const Description = styled.p`
  font-size: 0.875rem;
`

export const BoxInformationContainer = styled.div`
  display: flex;
`

export const IconContainer = styled.div<IconProp>`
  padding: 0 0.5rem 1.875rem 0;
  color: ${props => props.theme[props.iconcolor]};
`