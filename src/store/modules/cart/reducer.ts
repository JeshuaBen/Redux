import { Reducer } from "redux";
import produce from "immer";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        // Aqui nós conseguimos acessar o estado antes dele ser modificado, tanto através do state quanto do draft. Então nós percorremos o array para verificar se já existe algum item dentro do carrinho, e caso haja, adicionar mais uma quantidade a ele.
        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          // Caso não seja encontrado nenhum item, ai nós adicionamos esse item ao carrinho.
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

// Utilizando a biblioteca Immer para nos ajudar a fazer alterações em estados. Para nos ajudar com a questão da imutabilidade.

// Produce: irei produzir um novo estado a partir do 'rascunho' do estado anterior.
// produce() => recebe como primeiro parâmetro o estado (se assemelha ao ...state) e como segundo parâmetro, uma função que tem como primeiro parâmetro o draft e tem o mesmo formato do estado.

// No final, ele irá comparar o draft ao state e depois, irá fazer essa atualização no estado.

// Todas as regras de negócio, verificações e afins, sempre devem ficar no reduce, a nossa action deve possui apenas os componentes que vão ser atualizados.
