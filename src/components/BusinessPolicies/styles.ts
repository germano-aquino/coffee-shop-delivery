import styled from "styled-components"

export const BusinessPoliciesGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const BusinessPoliciesFlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 32.875rem;
`
export type IconColors = 'yellow-700' | 'yellow-500' | 'gray-700' | 'purple-500'

export interface IconProp {
  iconcolor: IconColors
}

export const BusinessPolicyContainer = styled.div`
  display: flex;
  gap: 0.34375rem;
  align-items: center;
  margin-bottom: 1.25rem;
`

export const BusinessPolicyIcon = styled.span<IconProp>`
    color: ${props => props.theme["gray-100"]};
    background: ${props => props.theme[props.iconcolor]};
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    margin-right: 0.125rem;
`