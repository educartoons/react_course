import Rebase from "re-base";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyARpp-xAcqKQ4uVp54_6TebpAbTfezwKtg",
  authDomain: "react-workshop-50f5e.firebaseapp.com",
  databaseURL: "https://react-workshop-50f5e.firebaseio.com",
  projectId: "react-workshop-50f5e",
  storageBucket: "react-workshop-50f5e.appspot.com",
  messagingSenderId: "149973581278"
};

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export { firebase };

export default base;
