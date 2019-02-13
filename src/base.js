import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGufvkDtamAPjFnvdJE-2MuHkQnRoOfnM",
  authDomain: "catch-of-the-day-a743d.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-a743d.firebaseio.com"
});

const rebase = Rebase.createClass(firebaseApp.database());

export { firebase };

export default rebase;
