import styled from "styled-components";

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  input[type='radio'] {
    opacity: 0;
    position: absolute;
  }
  margin-bottom: 1rem;
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex: 1;

  background: ${props => props.theme["gray-400"]};
  padding: 1rem;
  border: 1px solid ${props => props.theme["gray-400"]};
  border-radius: 6px;

  font-size: 0.75rem;
  line-height: 1.6;
  text-align: center;

  span {
    display: grid;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme["purple-500"]};
    margin-right: 0.75rem;
  }

  &:hover {
    background: ${props => props.theme["gray-500"]};
  }

  input[type='radio']:checked + &{
    background: ${props => props.theme["purple-300"]};
    border: 1px solid ${props => props.theme["purple-500"]};
  }
`