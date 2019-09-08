import firebase from 'firebase/app'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyDqiS4YDNNdU2oQeJMA_yAJOcJkLWo3RZU",
    authDomain: "signupandsignin-7937d.firebaseapp.com",
    databaseURL: "https://signupandsignin-7937d.firebaseio.com",
    projectId: "signupandsignin-7937d",
    storageBucket: "signupandsignin-7937d.appspot.com",
    messagingSenderId: "30251512058",
    appId: "1:30251512058:web:ea917d8b958bd075"
  };
  // Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);
const  provider = new firebase.auth.FacebookAuthProvider();

export{
    firebaseApp,
    provider
}
