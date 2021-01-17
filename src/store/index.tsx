import React, { createContext, useReducer, Dispatch } from "react";
import {
  productReducer,
  shoppingCartReducer,
  ProductActions,
  ShoppingCartActions,
} from "./reducers";

const product = {
  id: 1,
  name: "Máscara de Tecido",
  details: `Máscara de Proteção Lavável com Dupla Camada - Forro em 100% Algodão.

    Modelo Anatômico.
    Material Reforçado.
    Dupla Camada com Forro de Algodão.
    
    Impede que vírus e bactérias se espalhem ao tossir, espirrar ou conversar.
    
    Antes de utilizar, lave a máscara com sabão neutro. Recomendação é que o item seja utilizado por até duas horas e trocado após esse período.
    
    Trabalhamos com:
    
    Adulto e Infantil.
    
    Tamanho Infantil 22cm x 12cm.
    Tamanho Adulto 26cm x 14cm.
    `,
  number: 10,
  price: 30.5,
  seller: "Loja da Bia",
  phone: "1199879869965",
};

export type ProductType = {
  id: number;
  name: string;
  price: number;
  details?: string;
  number?: number;
  seller?: string;
  phone?: string;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
};

const initialState = {
  products: [product],
  shoppingCart: 0,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
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
