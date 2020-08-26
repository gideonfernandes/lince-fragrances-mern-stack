export function loadProductsRequest() {
  return {
    type: '@productList/LOAD_REQUEST',
  };
};

export function loadProductsSuccess(products) {
  return {
    type: '@productList/LOAD_SUCCESS',
    products,
  };
};
