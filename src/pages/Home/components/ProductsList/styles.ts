import styled from "styled-components";

export const ProductsListTitle = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: ${props => props.theme["gray-800"]};
  margin-bottom: 3.375rem;
`
export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;
`