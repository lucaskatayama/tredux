export const get = id => new Promise((res, rej) => {
  const item = localStorage.getItem(id);
  if (!item) {
    return rej('Item inválido');
  }
  return res(item);
});
