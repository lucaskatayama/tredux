import shortid from 'shortid';
import store from 'store';

export const get = id => new Promise((res, rej) => {
  const item = localStorage.getItem(id);
  if (!item) {
    return rej('Item inválido');
  }
  return res(item);
});

export const post = (path, body) => new Promise((res, rej) => {
  switch (path) {
    case '/lists': {
      const list = { ...body, id: shortid.generate(), cards: [] };
      store.set('lists', [...store.get('lists') || [], list]);
      res(list);
      break;
    }
    default:
      rej('Unhandled path', path);
  }
});
