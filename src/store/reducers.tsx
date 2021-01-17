import { ProductType } from "./index";

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
  image: "https://i.ytimg.com/vi/eSXu5BZSBHo/maxresdefault.jpg",
  number: 10,
  price: 30.5,
  seller: "Loja da Bia",
  phone: "1199879869965",
};

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
  action: ProductActions | ShoppingCartActions
): ProductType[] => {
  switch (action.type) {
    case Types.Read:
      return [product];
    case Types.Create:
      return state;
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

type ShoppingCartPayload = {
  [Types.Add]: undefined;
};

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
): ProductType[] => {
  switch (action.type) {
    case Types.Add:
      return state;
    default:
      return state;
  }
};
