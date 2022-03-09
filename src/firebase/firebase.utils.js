
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Config object provided by Firebase Auth
const config = {
    apiKey: "AIzaSyDsw2Z-hXdoA-AQFh04Gjzlni-VLYpH0RA",
    authDomain: "crwn-db-ad722.firebaseapp.com",
    projectId: "crwn-db-ad722",
    storageBucket: "crwn-db-ad722.appspot.com",
    messagingSenderId: "647141084615",
    appId: "1:647141084615:web:e424dc5684854601fb5de2"
};


// Function taking userAuth object we get from Firebase auth library and store it in our Firebase db.

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // Ask Firebase for the document reference at users/xyz.
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // Call get() on the retrieved document reference to get the document snapshot. This is asynchronous (but not the userRef call above?) so it needs await keyword to tell JS to wait to execute next lines of code until this one is finished.
    const snapShot = await userRef.get();

    // Check to see if snapshot DOESN'T exist in database.
    if (!snapShot.exists) {

        // Destructure displayName and email properties from Firebase userAuth object.
        const { displayName, email } = userAuth;
        // Create new JS time to record when new record was created.
        const createdAt = new Date();

        // Try/catch block for asynchronous request and to get errors.
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    // Function always returns the userRef (document reference) object in case we want to do other things with it.
    return userRef;
    
}








firebase.initializeApp(config);

// Code from docs that configures Firebase utility
// Instantiating auth method on Firebase, exported for use anywhere in app.
export const auth = firebase.auth();
// Export firestore (database).
export const firestore = firebase.firestore();


// Google authentication utility.
// Instantiate Google Auth Provider class from auth library - one type of provider.
const provider = new firebase.auth.GoogleAuthProvider();
// Set custom parameter on our (Google) Provider - this triggers Google popup.
provider.setCustomParameters({ prompt: 'select_account' });
// Export out sign in with popup method, passing it our (Google) Provider.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 