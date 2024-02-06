const signUpButton = document.querySelector("#toClick");
const container = document.querySelector(".container");
const actualForm = document.querySelector(".actualForm");
const design = document.querySelector(".design");
const list = document.querySelectorAll("#SignUpOnly");

console.log(list.length);

signUpButton.addEventListener("click", () => {
    container.classList.add("signUpMode");
    actualForm.classList.add("moveToSide");
    design.classList.add("startMove");
    for (i = 0; i < list.length; i++) {
        list[i].classList.add("ShowIn3");

    }
});
