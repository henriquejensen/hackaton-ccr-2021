import React, { createContext, useReducer, Dispatch } from "react";
import {
  productReducer,
  shoppingCartReducer,
  ProductActions,
  ShoppingCartActions,
  userReducer,
  UserActions,
} from "./reducers";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  details: string;
  number: number;
  seller: string;
  phone: string;
};

export type UserType = {
  email?: string;
  password?: string;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: ProductType[];
  user: UserType;
};

const initialState = {
  products: [],
  shoppingCart: [],
  user: {},
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions | UserActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { products, shoppingCart, user }: InitialStateType,
  action: ProductActions | ShoppingCartActions | UserActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
  user: userReducer(user, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
