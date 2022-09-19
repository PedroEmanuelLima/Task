import { initializeApp } from "firebase/app";
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: "rn-firebase-24de6",
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: "1072303175258",
    appId: `${process.env.REACT_APP_APP_ID}`
};

const app = initializeApp(firebaseConfig);
const database = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});;
export default database; 