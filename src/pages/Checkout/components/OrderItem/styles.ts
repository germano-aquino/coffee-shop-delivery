import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  padding: 1.5rem;

  border-bottom: 1px solid ${props => props.theme["gray-400"]};
  img {
    width: 4rem;
    height: 4rem;

    margin-right: 1.25rem;
  }
`

export const PriceItemContainer = styled.div`
  display: flex;
  flex: 1;

  p {
    font-weight: 700;
  
    text-align: right;
    flex: 1;
  }
`

export const ItemDetails = styled.div`
  div {
    display: flex;
  }

  p {
    font-weight: 400;

    text-align: left;
    margin-bottom: 0.5rem;
  }
`

export const Amount = styled.div`
  display: flex;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 6px;
  margin-right: 0.5rem;

  background: ${props => props.theme["gray-400"]};

  button {
    border: none;
    color: ${props => props.theme["purple-500"]};
  }

  button:hover {
    color: ${props => props.theme["purple-700"]};
    background: ${props => props.theme["gray-400"]};
    cursor: pointer;
  }

  button:focus {
    box-shadow: none;
  }

  span {
    margin: 0 0.25rem;
    text-align: center;
    justify-content: center;
  }
`

export const RemoveFromCart = styled.button`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 6px;

  background: ${props => props.theme["gray-400"]};
  border: none;

  font-size: 0.75rem;
  line-height: 1.6;
  color: ${props => props.theme["gray-700"]};

  &:hover {
    background: ${props => props.theme["gray-500"]};
    cursor: pointer;
  }

  span {
    display: flex;
    color: ${props => props.theme["purple-500"]};
    margin-right: 0.25rem;
    align-items: center;
    justify-content: center;
  }

`
