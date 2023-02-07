export const ORDER_KEY = 'Order-Number';

export const getOrder = () => {
  const orderData = window.localStorage.getItem(ORDER_KEY);
  return orderData ? orderData : null;
};

export const setOrder = orderNumber => {
  window.localStorage.setItem(ORDER_KEY, orderNumber);
};

export const clearCurrentOrder = () => {
  window.localStorage.removeItem(ORDER_KEY);
};
