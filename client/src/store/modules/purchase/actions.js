export function purchaseRequest(user_id, order, total) {
  return {
    type: '@purchase/REQUEST',
    user_id,
    order,
    total,
  };
};

export function purchaseSuccess(purchaseData) {
  return {
    type: '@purchase/SUCCESS',
    purchaseData,
  };
};
