import styled from 'styled-components'
import { InformationContainer } from '../../styles'

export const OrderContainer = styled(InformationContainer)`
  width: 28rem;

  display: grid;
  grid-column-gap: 1.5rem;
  padding: 2.5rem;

  border-radius: 6px 44px;

  a {
    outline: none;
    
  }
`

export const PriceContainer = styled.div`
  p {
    display: flex;
    justify-content: space-between;
  }
  p + p {
    margin-top: 0.75rem;
  }
  p:last-child {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme['gray-800']}
  }
`

export const ConfirmOrderButton = styled.button`
  height: 2.875rem;

  line-height: 1.6;
  font-weight: 700;
  color: ${props => props.theme.white};
  background: ${props => props.theme['yellow-500']};
  border: none;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme['yellow-700']};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${props => props.theme['yellow-500']};
  }
`