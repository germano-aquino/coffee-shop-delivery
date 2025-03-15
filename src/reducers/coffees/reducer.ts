import { CoffeeName } from "../../utils/menu";
import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface Coffee {
  id: string,
  name: CoffeeName,
  amount: number,
  price: number,
}

export interface DeliveryInformation {
  street: string,
  number: number,
  neighborhood: string,
  city: string,
  state: string,
  paymentMethod: 'credit' | 'debit' | 'cash'
}

interface CoffeesState {
  coffees: Coffee[],
  totalCoffeeCost: number,
  itemsCartQuantity: number,
  deliveryInformation: DeliveryInformation
}

export function CoffeesReducer(state: CoffeesState, action: any) {
  switch(action.type) {
    case(ActionTypes.ADD_NEW_COFFEE_TO_CART): {
      return produce(state, (draft) => {
        draft.coffees.push(action.payload)
      })
    }

    case(ActionTypes.REMOVE_FROM_CART): {
      return produce(state, (draft) => {
        draft.coffees = draft.coffees.filter((item) => item.name !== action.payload.name)
      })
    }

    case(ActionTypes.CHANGE_COFFEE_AMOUNT): {
      return produce(state, (draft) => {
        draft.coffees[action.payload.index].amount = action.payload.amount
      })
    }

    case(ActionTypes.UPDATE_COFFEE_TOTAL_COST_ACTION): {
      return produce(state, (draft) => {
        draft.totalCoffeeCost = state.coffees.reduce(
          (totalCost, coffee) => totalCost + coffee.amount * coffee.price, 0
        )
      })
    }

    case(ActionTypes.STORE_DELIVERY_INFORMATION_ACTION): {
      return produce(state, (draft) => {
        draft.deliveryInformation = action.payload.deliveryInformation
      })
    }

    case(ActionTypes.UPDATE_ITEMS_CART_QUANTITY_ACTION): {
      return produce(state, (draft) => {
        draft.itemsCartQuantity = state.coffees.reduce(
          (itemsQuantity, coffee) => itemsQuantity + coffee.amount, 0
        )
      })
    }

    case(ActionTypes.REMOVE_ALL_COFFEES_FROM_CART_ACTION): {
      return produce(state, (draft) => {
        draft.coffees = []
      })
    }
    
    default:
      return state
  }
}