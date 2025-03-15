import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 2rem auto;

  background: ${(props) => props.theme['gray-1s00']};

  display: flex;
  flex-direction: column;
`