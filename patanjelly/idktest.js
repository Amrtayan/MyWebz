const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const Log = document.getElementById('Log');
const Sign = document.getElementById('Sign');       

document.querySelector("form").addEventListener("submit",(e)=>{
     e.preventDefault();

Log.addEventListener('click', e =>{
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.catch ( e =>{ console.log(e.message);
        window.alert('thanks for logging in.');
    });
});

Sign.addEventListener('click', e =>{
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise.catch ( e =>{ console.log(e.message);
        window.alert('Congratz! YOU are now a member.');
    });
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
    
        console.log(firebaseUser);
    }
    else {
        console.log('not logged in');
    }
});


})
