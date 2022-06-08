import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}

// Toda ação do redux, ela precisa exportar um objeto e ela tem uma propriedade obrigatória que identifica cada uma das ações.

// Payload seria toda informação adicional que eu precise para adicionar um produto ao carrinho
