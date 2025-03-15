import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 10rem;
  justify-content: space-between;

  a {
    outline: none;
    box-shadow: none;
    border: none;
  }

  div {
    display: flex;
    gap: 0.75rem;

    a {
      color: ${props => props.theme['yellow-700']};
      background: ${props => props.theme['yellow-300']};
      padding: 0.5rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      outline: none;
    }
  }
`

export const LocationContainer = styled.div`
  color: ${props => props.theme['purple-700']};
  background: ${props => props.theme['purple-300']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  line-height: 1.3;
  border-radius: 6px;
`

export const ItemsQuantityContainer = styled.div`
  font-weight: 700;
  color: ${props => props.theme.white};
  background: ${props => props.theme['yellow-700']};

  justify-content: center;
  
  position: relative;
  left: -22px;
  top: -10px;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
`