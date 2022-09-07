import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyD8RlLqRqjNp5bUj01VDHYV4zg7emXC19w",
    authDomain: "rn-firebase-24de6.firebaseapp.com",
    projectId: "rn-firebase-24de6",
    storageBucket: "rn-firebase-24de6.appspot.com",
    messagingSenderId: "1072303175258",
    appId: "1:1072303175258:web:e2a94362e8a684136f0a63"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database; 