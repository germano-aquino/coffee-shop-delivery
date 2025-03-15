import styled from "styled-components";

export const DeliveryContainer = styled.div`
  margin: 5rem 10rem 0 10rem;

  h1 {
    font-family: 'Badoo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme["yellow-700"]};
    
    margin-bottom: 0.25rem;
  }

  p {
    color: ${props => props.theme["gray-800"]};
    font-size: 1.25rem;

  }
`

export const DeliveryInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.5rem;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 2.5rem;
  row-gap: 2rem;

  background: linear-gradient(${props => props.theme["gray-200"]} 0 0) padding-box,
  linear-gradient(to right, ${props => props.theme["yellow-500"]}, ${props => props.theme["purple-500"]}) border-box;

  border: 1px solid transparent;
  border-radius: 6px 36px;
  p {
    font-size: 1rem;
  }
`

export const DeliveryInformationDescription = styled.p`
  color: ${props => props.theme["gray-700"]};

  font-family: 'Roboto';
  font-size: 1rem;
  line-height: 1.3;
`