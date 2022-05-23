import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAePxdCx7ZJS0DBM4N_4SGO3r-IbaUv7r0",
    authDomain: "disneyclone-be548.firebaseapp.com",
    projectId: "disneyclone-be548",
    storageBucket: "disneyclone-be548.appspot.com",
    messagingSenderId: "1078630780933",
    appId: "1:1078630780933:web:0031397c6cf133f24ecc6c"
  };

  firebase.initializeApp(firebaseConfig);
  const provider=new firebase.auth.GoogleAuthProvider();
  const auth=firebase.auth();
  const db=firebase.firestore();
  // const storage=firebase.storage();
  export {provider,auth,db};