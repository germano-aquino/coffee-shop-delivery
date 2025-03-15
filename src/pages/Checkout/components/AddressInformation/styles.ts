import styled from "styled-components";
import { InformationContainer } from "../../styles";

export const AddressContainer = styled(InformationContainer)`
  margin-bottom: 0.75rem;
`

const BaseInput = styled.input`
  background: ${props => props.theme["gray-300"]};
  box-shadow: none;
  border: 1px solid ${props => props.theme["gray-400"]};
  border-radius: 4px;
  padding: 0.75rem;

  margin-bottom: 0.75rem;
  ::placeholder {
    color: ${props => props.theme["gray-600"]};
  }
`

export const CEPInput = styled(BaseInput)`
  width: 12.5rem;
`

export const StreetInput = styled(BaseInput)`
  width: 100%;
`

export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
  margin-right: 0.75rem;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`

export const ComplementInput = styled(BaseInput)`
  width: 21.75rem;
`

export const NeighborhoodInput = styled(BaseInput)`
  width: 12.5rem;
  margin-right: 0.75rem;
`

export const CityInput = styled(BaseInput)`
  width: 17.25rem;
  margin-right: 0.75rem;
`

export const StateInput = styled(BaseInput)`
  width: 3.75rem;
`
