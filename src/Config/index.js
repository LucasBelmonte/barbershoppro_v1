
import { getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";

import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9

// import firebase from 'firebase/app'; 
// import "firebase/firestore";
// import "firebase/auth";
import "firebase/database";
import 'firebase/storage';

const firebaseConfig =  {
  apiKey: "AIzaSyA3raEY0tfqz1Jw25Y6AeK531A1zB7MwKQ",
  authDomain: "barbeshoppro-330fb.firebaseapp.com",
  databaseURL: "https://barbeshoppro-330fb-default-rtdb.firebaseio.com",
  projectId: "barbeshoppro-330fb",
  storageBucket: "barbeshoppro-330fb.appspot.com",
  messagingSenderId: "1078539980716",
  appId: "1:1078539980716:web:33a66a7defd5f1b2f83409",
  measurementId: "G-7Y3KK4VWHC"
};
// Inicialização do Firebase
// if (firebase.apps.length === 0) {
//   const app = initializeApp(firebaseConfig);
//   console.log('Conexão feita');
// }
//  if(!firebase.apps.length){ 
 if(firebase.apps.length === 0){ 
  const app = initializeApp(firebaseConfig);
  console.log(app);
}
const db = getFirestore(app);
// const db = firebase.firestore();
console.log(db ,'messagem'); 
export { db };
export default firebase;

  // Add a new document in collection "cities"
 
//}
// const firestore = firebase.firestore();
// const db = firebase.firestore();



