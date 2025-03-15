import { PaymentInformation } from './components/PaymentInformation'
import { AddressInformation } from './components/AddressInformation'
import { CheckoutContainer, ClientInformationContainer, Title } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { OrderInformation } from './components/OrderInformation'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { DeliveryInformation } from '../../reducers/coffees/reducer'

const paymentMethods = ["credit", "debit", "cash"] as const

const addressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .regex(new RegExp('\\d{5}-\\d{3}'), {message: 'O campo de CEP deve ser preenchido com o seguinte formato de exemplo 12345-123.'}),
  street: zod.string().min(1, {message: 'O campo rua deve ser preenchido.'}),
  number: zod.number({required_error: 'O campo número é obrigatório.', invalid_type_error: 'O campo número é obrigatório.'})
    .gt(0, {message: 'Este campo deve ser preenchido com um número maior que 0.'}),
  complement: zod.string().min(1).or(zod.literal('')),
  neighborhood: zod.string().min(1, {message: 'O campo Bairro deve ser preenchido.'}),
  city: zod.string().min(1, {message: 'O campo Cidade deve ser preenchido.'}),
  state: zod.string().regex(new RegExp('[a-zA-Z]{2}'), {message: 'O campo Estado deve ser preenchido com o seguinte formato de exemplo PR.'}),
  paymentMethod: zod.enum(paymentMethods, {message: 'Selecione um método de pagamento.'})
})

export type addressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {

  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: undefined,
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: undefined
    }
  })

  const navigate = useNavigate()
  const {handleSubmit, reset} = addressForm
  const { storeDeliveryInformation, clearCartItems } = useContext(OrderContext)

  function handleCheckoutOrder(data: addressFormData) {
    const deliveryInformation: DeliveryInformation = {
      street: data.street,
      number: data.number,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      paymentMethod: data.paymentMethod
    }
    storeDeliveryInformation(deliveryInformation)
    reset()
    clearCartItems()
    navigate('/delivery')
  }

  return (
    <CheckoutContainer>
      <ClientInformationContainer>
        <Title>Complete seu pedido</Title>
        <form id="checkoutForm" onSubmit={handleSubmit(handleCheckoutOrder)}>
          <FormProvider {...addressForm}>
            <AddressInformation />
            <PaymentInformation />
          </FormProvider>
        </form>
      </ClientInformationContainer>
      <div>
        <Title>Cafés selecionados</Title>
        <OrderInformation />
      </div>
    </CheckoutContainer>
  )
}