import { ProductType, UserType } from "./index";
import data from "./products";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Read = "READ_PRODUCTS",
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
  Login = "LOGIN",
}

// Product

type ProductPayload = {
  [Types.Create]: ProductType;
  [Types.Delete]: ProductType;
  [Types.Read]: undefined;
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions | UserActions
): ProductType[] => {
  switch (action.type) {
    case Types.Read:
      return data;
    case Types.Create:
      return state;
    default:
      return state;
  }
};

type ShoppingCartPayload = {
  [Types.Add]: ProductType;
  [Types.Delete]: undefined;
};

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions | UserActions
): ProductType[] => {
  switch (action.type) {
    case Types.Add:
      return [...state, action.payload];
    case Types.Delete:
      return [];
    default:
      return state;
  }
};

type UserPayload = {
  [Types.Login]: UserType;
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export const userReducer = (
  state: UserType,
  action: ProductActions | ShoppingCartActions | UserActions
): UserType => {
  switch (action.type) {
    case Types.Login:
      return action.payload;
    default:
      return state;
  }
};
