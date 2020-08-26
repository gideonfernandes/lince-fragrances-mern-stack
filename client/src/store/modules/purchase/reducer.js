function purchase(state = {
  purchaseData: {},
  purchaseDone: false,
}, action) {
  switch (action.type) {
    case '@purchase/SUCCESS':
      return {
        ...state,
        purchaseData: action.purchaseData,
        purchaseDone: true,
      };
    default:
      return state;
  };
};

export default purchase;
