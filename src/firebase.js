import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFyiU4DcXy-VuKICmDoA5-Q7TkCkxYhKQ",
  authDomain: "e-commerce-22769.firebaseapp.com",
  databaseURL: "https://e-commerce-22769-default-rtdb.firebaseio.com",
  projectId: "e-commerce-22769",
  storageBucket: "e-commerce-22769.appspot.com",
  messagingSenderId: "397478081397",
  appId: "1:397478081397:web:f7c7546aeb13b8ac54193c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
