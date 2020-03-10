
export const addProductToBasket = product => {
  const existing = window.localStorage.getItem('cart');

  if (existing) {
    const parsed = JSON.parse(existing);
    window.localStorage.setItem('cart', JSON.stringify([...parsed, product]))
  } else {
    window.localStorage.setItem('cart', JSON.stringify([product]))
  }
}

export const getBasket = () => {
  const existing = window.localStorage.getItem('cart');

  if (existing) {
    return JSON.parse(existing)
  }

  return [];
}

export const clearBasket = () => {
  window.localStorage.removeItem('cart');
}