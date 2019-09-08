import { firebaseApp, provider } from './firebase.jsx'
function api() {
    return new Promise((resolve, reject) => {
        fetch(' https://opentdb.com/api.php?amount=10')
            .then(response => response.json())
            .then(json => resolve(json.results))
            .catch(err => reject(err))
    })
}


let facebookLogin = () => {
    return new Promise((resolve, reject) => {
        provider.setCustomParameters({
            'display': 'popup'
        });

        firebaseApp.auth().signInWithPopup(provider).then(function (result) {
            var user = result.user;
            let userObj = {
                name: user.displayName,
                img: user.photoURL
            }
            resolve(userObj)
        }).catch(function (error) {
            var errorMessage = error.message;
            reject(errorMessage)
        });

    })


}


function Logout(){
    firebaseApp.auth().signOut().then(function() {
  }).catch(function(error) {
  });
  }


var seconds = 10 * 60
let Timer = ()=> {
return new Promise((resolve ,reject) =>{   
  var minutes = Math.round((seconds-30)/60),
        remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    resolve(minutes + ":" + remainingSeconds)
    if (seconds == 0) {
      reject("0:00")
    } else {
      seconds--;
    }
  })
}

export { api, facebookLogin,Timer,Logout}