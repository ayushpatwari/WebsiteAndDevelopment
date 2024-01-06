//Sign up button
const createAccount = document.querySelector("#toClick");
//container
const container = document.querySelector(".container");
//form element
const actualForm = document.querySelector(".actualForm");
//design element
const design = document.querySelector(".design");
//sign up elements
const signUpOnlyElements = document.querySelectorAll(".SignUpOnly");
//sign in h3
const signIn = document.querySelector("#signIn");
//signUpButton
const button = document.querySelector(".LOGIN");
//Gainig access to the create class and its elements
const arrow = document.querySelector("#Arrow");

//getting access to all form elements
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");

//accessing input DIVS, not the inputs, which are above ^
const emailInp = document.querySelector("#emailInput");
const userInp = document.querySelector("#userInput");
const passInp = document.querySelector("#passwordInput");
const confirmInp = document.querySelector("#confirmInput");

//Regex - regular expressions to check for - email, etc.
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const buttonStates = {
    "Creation Mode": "Sign Up",
    "Login Mode": "Login"
}

//sign in mode currently; login basically
let signInMode = true;

//confetti - not using rn
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

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (button.innerHTML == buttonStates["Login Mode"]) {
        //Process login - make sure every value that is required is FILLED at the least
        const userVal = username.value;
        const passVal = password.value;
        
        if (userVal && passVal) {
            //Successfull
            actualForm.submit();
        } else if (userVal && !passVal) {
            //Password not filled out
            console.log("Here!");
            passInp.classList.add("invalid");
            setTimeout(() => {
                passInp.classList.remove("invalid");
            }, 200);
        } else if (!userVal && passVal) {
            userInp.classList.add("invalid");
            setTimeout(() => {
                userInp.classList.remove("invalid");
            }, 200);
        } else {
            userInp.classList.add("invalid");
            passInp.classList.add("invalid");
            setTimeout(() => {
                userInp.classList.remove("invalid");
                passInp.classList.remove("invalid");
            }, 200);
        }
    } else {
        //Process signup - make sure everything is correct INCLUDING REGEX (ugh)
        if (emailRegEx.test(email.value)) {
            //Email is proper
        } else {
            emailInp.classList.add("invalid");
            setTimeout(() => {
                emailInp.classList.remove("invalid");
            }, 200);
        }

        if (password.value) {
            //proper
        } else {
            passInp.classList.add("invalid");
            setTimeout(() => {
                passInp.classList.remove("invalid");
            }, 200);
        }

        if (confirmPass.value == password.value && confirmPass.value != "") {
            //proper
        } else {
            confirmInp.classList.add("invalid");
            setTimeout(() => {
                confirmInp.classList.remove("invalid");
            }, 200);
        }

        if (username.value) {
            //proper
        } else {
            userInp.classList.add("invalid");
            setTimeout(() => {
                userInp.classList.remove("invalid");
            }, 200);
        }
        console.log(username.value && confirmPass.value == password.value && password.value && emailRegEx.test(email.value));
        if (username.value && confirmPass.value == password.value && password.value && emailRegEx.test(email.value)) {
            actualForm.submit();
        }

    }
});
