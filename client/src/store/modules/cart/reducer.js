import produce from 'immer';

function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      })
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p._id === action.productId);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        };
      });
    
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p._id === action.productId);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        };
      });
    
    case '@cart/RESET':
      return [];
    default:
      return state;
  };
};

export default cart;
