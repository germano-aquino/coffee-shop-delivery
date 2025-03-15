import { CoffeeName } from "../../utils/menu";
import { Coffee, DeliveryInformation } from "./reducer";

export enum ActionTypes {
  ADD_NEW_COFFEE_TO_CART = 'ADD_NEW_COFFEE_TO_CART',
  REMOVE_FROM_CART= 'REMOVE_FROM_CART',
  REMOVE_ALL_COFFEES_FROM_CART_ACTION = 'REMOVE_ALL_COFFEES_FROM_CART_ACTION',
  CHANGE_COFFEE_AMOUNT = 'CHANGE_COFFEE_AMOUNT',
  UPDATE_COFFEE_TOTAL_COST_ACTION = 'UPDATE_COFFEE_TOTAL_COST_ACTION',
  STORE_DELIVERY_INFORMATION_ACTION = 'STORE_DELIVERY_INFORMATION_ACTION',
  UPDATE_ITEMS_CART_QUANTITY_ACTION = 'UPDATE_ITEMS_CART_QUANTITY_ACTION',
}

export function addNewCoffeeToCartAction({id, name, amount, price}: Coffee) {
  return {
      type: ActionTypes.ADD_NEW_COFFEE_TO_CART,
      payload: {
        id,
        name,
        amount,
        price
      },
  }
}

export function removeFromCartAction(name: CoffeeName) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      name
    }
  }
}

export function changeCoffeeAmountAction(index: number, amount: number) {
  return {
    type: ActionTypes.CHANGE_COFFEE_AMOUNT,
    payload: {
      index,
      amount
    }
  }
}

export function updateCoffeeTotalCostAction() {
  return {
    type: ActionTypes.UPDATE_COFFEE_TOTAL_COST_ACTION
  }
}

export function storeDeliveryInformationAction(data: DeliveryInformation) {
  return {
    type: ActionTypes.STORE_DELIVERY_INFORMATION_ACTION,
    payload: {
      deliveryInformation: data
    }
  }
}

export function updateItemsCartQuantityAction() {
  return {
    type: ActionTypes.UPDATE_ITEMS_CART_QUANTITY_ACTION
  }
}

export function removeAllCoffeesFromCartAction() {
  return {
    type: ActionTypes.REMOVE_ALL_COFFEES_FROM_CART_ACTION
  }
}
