import firebase from 'firebase/app';

export const getItemById = (items, id) => items.find(item => item.id === id);

const auth = () => firebase.auth().currentUser;

export const requireAuth = (to, from, next) => {
  if (!auth()) {
    next('/auth');
  } else {
    next();
  }
};
