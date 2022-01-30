import  firebase from 'firebase';
//require('@firebase/firestore')



const firebaseConfig = {
  apiKey: "AIzaSyBygGTptTyHrQXMJjc1k_QI1FqdLm2E8r0",
  authDomain: "cart-ff674.firebaseapp.com",
  projectId: "cart-ff674",
  storageBucket: "cart-ff674.appspot.com",
  messagingSenderId: "1089373800208",
  appId: "1:1089373800208:web:69fcf132575883d16e8795"
};


// Initialize Firebase

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();