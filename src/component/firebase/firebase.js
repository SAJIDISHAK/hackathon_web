import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfDv1XNyka4iCwYpa-oiHye634vkm43so",
  authDomain: "react-native-saylani.firebaseapp.com",
  projectId: "react-native-saylani",
  storageBucket: "react-native-saylani.appspot.com",
  messagingSenderId: "531408340211",
  appId: "1:531408340211:web:cadc257f8bd8dbd163a386",
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
