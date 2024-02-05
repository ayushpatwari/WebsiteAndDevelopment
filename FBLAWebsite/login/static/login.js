//Sign up button
const createAccount = document.querySelector("#toClick");
//container
const container = document.querySelector(".container");
//form element
const actualForm = document.querySelector(".actualForm");
//design element
const design = document.querySelector(".design");
//sign up elements
const signUpOnlyElements = document.querySelectorAll("#SignUpOnly");
//sign in h3
const signIn = document.querySelector("#signIn");
//signUpButton
const button = document.querySelector(".LOGIN");
//Gainig access to the create class and its elements
const arrow = document.querySelector("#Arrow");

//getting access to all form elements
const username = document.querySelector("#username");
const password = document.querySelector("#password");

let signInMode = true;


//confetti
const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};
//  for stopping the confetti 
const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

createAccount.addEventListener("click", () => {
    if (signInMode) {
        container.classList.add("signUpMode");
        actualForm.classList.add("moveToSide");
        design.classList.add("startMove");
        setTimeout(() => {
            /*
                What to do:
                Update all list elements to be NOT hidden (remove from classlist)
                Update h3 of signIn to be hidden
            */
            for (i = 0; i < signUpOnlyElements.length; i++) {
                signUpOnlyElements[i].classList.remove("hidden");
            }
            signIn.classList.add("hidden");
            button.innerHTML = "Sign Up";
            createAccount.innerHTML = "Sign In";
            arrow.classList.remove("ri-arrow-right-fill");
            arrow.classList.add("ri-arrow-left-fill");
        }, 1500);
        signInMode = !signInMode;
    } else {
        /*
        What to do
        Remove all previous classlists
        Add new classlists that represent opposites
        */
        container.classList.remove("signUpMode");
        actualForm.classList.remove("moveToSide");
        design.classList.remove("startMove");
        
        
        setTimeout(() => {
            /*
                What to do:
                Update all list elements to be NOT hidden (remove from classlist)
                Update h3 of signIn to be hidden
            */
            for (i = 0; i < signUpOnlyElements.length; i++) {
                signUpOnlyElements[i].classList.add("hidden");
            }
            signIn.classList.remove("hidden");
            button.innerHTML = "Log In";
            createAccount.innerHTML = "Create Account";
            arrow.classList.remove("ri-arrow-left-fill");
            arrow.classList.add("ri-arrow-right-fill");
        }, 0);
        signInMode = !signInMode;
    }
});

button.addEventListener("click", () => {
    let userVal = username.value;
    let passVal = password.value;
    
    const toSend = {
        "username": userVal,
        "password": passVal
    };

    start();
    stop();
    console.log(toSend);
    
});