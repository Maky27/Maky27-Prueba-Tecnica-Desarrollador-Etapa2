import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5essTfhakfCLz3_7HNFmUmOFW-L1vkQ4",
    authDomain: "prueba-tecnica-desarrollador-2.firebaseapp.com",
    projectId: "prueba-tecnica-desarrollador-2",
    storageBucket: "prueba-tecnica-desarrollador-2.appspot.com",
    messagingSenderId: "59494363312",
    appId: "1:59494363312:web:df3c240350ac0196b08b75",
    measurementId: "G-FWN80QB6S3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;