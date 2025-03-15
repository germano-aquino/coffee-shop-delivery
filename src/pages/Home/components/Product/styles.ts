import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme["gray-200"]};

  border-radius: 6px 36px ;
  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
  }
`

export const CoffeeLabelContainer = styled.div`
  display: flex;
  margin-top: 0.75rem;
  
  p {
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["yellow-700"]};

    font-size: 0.625rem;
    font-weight: 700;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
  p + p {
    margin-left: 0.25rem;
  }
`

export const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;

  color: ${props => props.theme["gray-800"]};
  text-align: center;

  margin-top: 1rem;
`
export const Description = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme["gray-600"]};

  text-align: center;
  margin: 0.5rem 1.25rem 0 1.25rem;
`

export const ProductFooter = styled.footer`
  display: flex;

  margin: 2.0625rem 1.5rem 1.25rem 1.5rem;
`

export const Price = styled.div`
  margin-right: 1.4375rem;

  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.theme["gray-700"]};
  text-align: center;
  
  display: flex;
  align-items: center;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    margin-right: 0.25rem;
  }
`

export const Amount = styled.div`
  margin-right: 0.5rem;

  background: ${props => props.theme["gray-400"]};

  border-radius: 6px;
  gap: 0.25rem;
  padding:0.5rem 0.5rem;
  width: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${props => props.theme["gray-900"]};
    display: flex;
    justify-content:center;
    align-items: center;

    padding: 0.21875rem 0;

    width: 1.25rem;
    height: auto;
  }

  button {
    border: 0;

    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["purple-500"]};
  }

  button:hover {
    color: ${props => props.theme["purple-700"]};
    cursor: pointer;
  }

  button:focus {
    box-shadow: none;
  }
`

export const AddToCart = styled.button`
  background: ${props => props.theme["purple-700"]};
  color: ${props => props.theme.white};
  padding: 0.5rem;
  
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme["purple-500"]};
  }
`