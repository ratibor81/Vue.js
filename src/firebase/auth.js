import { auth } from './firebase';

// Sign out

export const doSignOut = () => auth.signOut();

export const currentUser = () => auth.currentUser;

// Check autorization with Google,Facebook,Twitter,Github

export const isAuth = () => !!(currentUser().displayName && currentUser().photoURL);
