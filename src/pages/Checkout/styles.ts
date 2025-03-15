import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  margin: 2.5rem 10rem;
  gap: 2rem;
`

export const ClientInformationContainer = styled.div`
  width: 40rem;
`
export const InformationContainer = styled.div`
  background: ${props => props.theme["gray-200"]};
  
  padding: 2.5rem;
  row-gap: 2rem;

  border-radius: 6px;
`

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;

  color: ${props => props.theme["gray-800"]};
  margin-bottom: 0.9375rem;
`