function productList(state = {
  products: [],
  loading: true,
}, action) {
  switch (action.type) {
    case '@productList/LOAD_SUCCESS':
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    default:
      return state;
  };
};

export default productList;
