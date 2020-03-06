const cartStorage = window.localStorage;

export const addProductToBasket = product => {
  const existing = cartStorage.getItem('cart');

  if (existing) {
    const parsed = JSON.parse(existing);
    cartStorage.setItem('cart', JSON.stringify([...parsed, product]))
  } else {
    cartStorage.setItem('cart', JSON.stringify([product]))
  }
}

export const getBasket = () => {
  const existing = cartStorage.getItem('cart');

  if (existing) {
    return JSON.parse(existing)
  }

  return [];
}

export const clearBasket = () => {
  cartStorage.removeItem('cart');
}