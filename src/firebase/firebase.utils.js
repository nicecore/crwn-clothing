import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDsw2Z-hXdoA-AQFh04Gjzlni-VLYpH0RA",
    authDomain: "crwn-db-ad722.firebaseapp.com",
    projectId: "crwn-db-ad722",
    storageBucket: "crwn-db-ad722.appspot.com",
    messagingSenderId: "647141084615",
    appId: "1:647141084615:web:e424dc5684854601fb5de2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;