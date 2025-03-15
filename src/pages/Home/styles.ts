import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.875rem 10rem 0 10rem;
`

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  justify-content: space-between;
  margin-bottom: 6.75rem;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: ${props => props.theme["gray-900"]};

  margin-bottom: 1rem;
`

export const Subtitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme["gray-800"]};
  margin-bottom: 4.125rem;
`