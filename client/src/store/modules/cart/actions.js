export function addToCartRequest(productId) {
  return {
    type: '@cart/ADD_REQUEST',
    productId,
  };
};

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
};

export function removeFromCart(productId) {
  return {
    type: '@cart/REMOVE',
    productId,
  };
};

export function updateAmountRequest(productId, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    productId,
    amount,
  };
};

export function updateAmountSuccess(productId, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    productId,
    amount,
  };
};

export function resetCart() {
  return {
    type: '@cart/RESET',
  };
};