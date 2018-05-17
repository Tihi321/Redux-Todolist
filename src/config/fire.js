import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDZTuxDxEcsFmy6Lcs5UMnsIcye5P9WaGE",
  authDomain: "todo-list-9aa22.firebaseapp.com",
  databaseURL: "https://todo-list-9aa22.firebaseio.com",
  projectId: "todo-list-9aa22",
  storageBucket: "todo-list-9aa22.appspot.com",
  messagingSenderId: "1047837366354"
};

const fire = firebase.initializeApp(config);
export default fire;
