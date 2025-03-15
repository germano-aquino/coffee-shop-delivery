import { MapPinLine } from '@phosphor-icons/react'
import { BoxInformation } from '../BoxInformation'
import { DisplayError } from '../../../../utils/error'
import { 
  AddressContainer, 
  CEPInput, 
  StreetInput, 
  NumberInput, 
  ComplementInput, 
  NeighborhoodInput, 
  CityInput, 
  StateInput
} from './styles'
import { useFormContext } from 'react-hook-form'

export function AddressInformation(){
  const { register, formState: {errors} } = useFormContext()

  return(
    <AddressContainer>
      <BoxInformation 
        Icon={ MapPinLine }
        iconColor='yellow-700'
        title='Endereço de Entrega'
        description='Informe o endereço onde deseja receber seu pedido'
      />
      <div>
        <CEPInput
          id='cep'
          placeholder='CEP'
          required
          {...register('cep')}
        />
        {DisplayError(errors['cep'])}
      </div>
      <StreetInput
        id='street'
        placeholder='Rua'
        required
        type='text'
        {...register('street')}
      />
      {DisplayError(errors['street'])}
      <div>
        <NumberInput
          id='number'
          placeholder='Número'
          required
          type='number'
          {...register('number', { valueAsNumber: true })}
        />
        {DisplayError(errors['number'])}
        <ComplementInput 
          id='complement'
          placeholder='Complemento'
          type='text'
          {...register('complement')}
        />
        {DisplayError(errors['complement'])}
      </div>
      <div>
        <NeighborhoodInput 
          id='neighborhood'
          placeholder='Bairro'
          required
          type='text'
          {...register('neighborhood')}
        />
        {DisplayError(errors['neighborhood'])}
        <CityInput 
          id='city'
          placeholder='Cidade'
          required
          type='text'
          {...register('city')}
        />
        {DisplayError(errors['city'])}
        <StateInput
          id='state'
          placeholder='UF'
          required
          type='text'
          maxLength={2}
          {...register('state')}
        />
        {DisplayError(errors['state'])}
      </div>
    </AddressContainer>
  )
}