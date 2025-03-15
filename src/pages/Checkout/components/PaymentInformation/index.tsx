import { Icon, CreditCard, Bank, Money, CurrencyDollar  } from "@phosphor-icons/react"
import { BoxInformation } from "../BoxInformation"
import { PaymentMethodsContainer, PaymentMethodContainer } from "./styles"
import { InformationContainer } from "../../styles"
import { useFormContext } from "react-hook-form"
import { DisplayError } from "../../../../utils/error"


interface PaymentMethod {
  Icon: Icon
  label: string
  id: string
}

function PaymentMethod({Icon, label, id}: PaymentMethod) {
  const { register } = useFormContext()
  return (
    <label htmlFor={id}>
      <input 
        type='radio' 
        value={id}
        id={id}
        {...register('paymentMethod')}
      />
      <PaymentMethodContainer>
        <span><Icon size={16}/></span>{label}
      </PaymentMethodContainer>
    </label>
  )
}

function PaymentMethods() {
  const paymentMethods: PaymentMethod[]= [
    {
      Icon: CreditCard,
      label: 'CARTÃO DE CRÉDITO',
      id: 'credit'
    },
    {
      Icon: Bank,
      label: 'CARTÃO DE DÉBITO',
      id: 'debit'
    }, 
    {
      Icon: Money,
      label: 'DINHEIRO',
      id: 'cash'
    }
  ]
  return (
    <PaymentMethodsContainer>
      {paymentMethods.map(method => <PaymentMethod 
        {...method}
        key={method.id}
      />)}
    </PaymentMethodsContainer>
  )
}

export function PaymentInformation() {
  const {formState: {errors}} = useFormContext()

  return (
    <InformationContainer>
      <BoxInformation 
        Icon={ CurrencyDollar }
        iconColor='purple-500'
        title='Pagamento'
        description='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
      />
      <PaymentMethods />
      {DisplayError(errors['paymentMethod'])}
    </InformationContainer>
  )
}