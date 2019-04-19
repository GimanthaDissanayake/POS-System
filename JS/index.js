var database=firebase.database();

function SignIn(){
  var txtuser=document.getElementById('username').value+"@pos-system-778dd.appspot.com";
  var txtpass=document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(txtuser, txtpass).catch(function(error) {
    window.alert(error.message)
    location.href="index.html";
  });

  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      if(firebaseUser.uid=="UNXtA8yh5KN2HfgqofmUjDVMZCv1"){
        location.href="admin.html";
      }
      else if(firebaseUser.uid=="mWKap68CpVRTGDcDEsOrH9kimjw2"){
        location.href="cashier.html";
      }
    }
  });
}

function SignOut()
{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    location.href="index.html";
  }).catch(function(error) {
    // An error happened.
  });
}