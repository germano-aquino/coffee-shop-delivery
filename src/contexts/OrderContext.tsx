import { createContext, ReactNode, useEffect, useReducer } from "react";
import { Coffee, CoffeesReducer, DeliveryInformation } from "../reducers/coffees/reducer";
import { CoffeeName } from "../utils/menu";
import { addNewCoffeeToCartAction, changeCoffeeAmountAction, removeAllCoffeesFromCartAction, removeFromCartAction, storeDeliveryInformationAction, updateCoffeeTotalCostAction, updateItemsCartQuantityAction } from "../reducers/coffees/actions";

export interface AddCoffeeToCartData {
  name: CoffeeName,
  amount: number
}

interface OrderContextType {
  coffees: Coffee[],
  totalCoffeeCost: number,
  itemsCartQuantity: number,
  deliveryInformation: DeliveryInformation,
  changeCartsCoffeeAmount: (data: AddCoffeeToCartData) => void,
  removeCoffeeFromCart: (name: CoffeeName) => void,
  storeDeliveryInformation: (data: DeliveryInformation) => void,
  clearCartItems: () => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    CoffeesReducer,
    {
      coffees: [],
      totalCoffeeCost: 0,
      itemsCartQuantity: 0,
      deliveryInformation: {}
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@coffee-shop:coffees-state-1.0.0',
      )
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }
      return initialState
    },
  )

  const {coffees, totalCoffeeCost, deliveryInformation, itemsCartQuantity} = coffeesState

  useEffect(() => {
    const storedStateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@coffee-shop:coffees-state-1.0.0', storedStateJSON)
    dispatch(updateCoffeeTotalCostAction())
    dispatch(updateItemsCartQuantityAction())
  }, [coffeesState])

  function changeCartsCoffeeAmount(data: AddCoffeeToCartData) {
    const index = coffees.findIndex((coffee) => coffee.name === data.name)
    if (index > -1) {
      const finalAmount = data.amount + coffees[index].amount
      if (finalAmount > 0) {
        dispatch(changeCoffeeAmountAction(index, finalAmount))
      }
      else {
        dispatch(removeCoffeeFromCart(data.name))
      }
    }
    else {
      const newCoffee: Coffee = {
        id: String(new Date().getTime()),
        name: data.name,
        amount: data.amount,
        price: 9.9
      }
      dispatch(addNewCoffeeToCartAction(newCoffee))
    }
  }

  function removeCoffeeFromCart(name: CoffeeName) {
    dispatch(removeFromCartAction(name))
  }

  function storeDeliveryInformation(data: DeliveryInformation) {
    dispatch(storeDeliveryInformationAction(data))
  }

  function clearCartItems() {
    dispatch(removeAllCoffeesFromCartAction())
  }

  return (
    <OrderContext.Provider
      value={{
        coffees,
        totalCoffeeCost,
        itemsCartQuantity,
        deliveryInformation,
        changeCartsCoffeeAmount,
        removeCoffeeFromCart,
        storeDeliveryInformation,
        clearCartItems,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}