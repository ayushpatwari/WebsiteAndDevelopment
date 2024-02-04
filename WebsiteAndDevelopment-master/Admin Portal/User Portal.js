const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");


    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
        toggle.classList.toggle("rotate"); // Add this line to toggle the rotated class

    });

    searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove("close");
    });
// const toCollapse = document.querySelector("#collapser");
// const toRemoveOnCollapse = document.querySelectorAll(".nocollapse");
// const logo = document.querySelector("#toHide");
// const scaleUp = document.querySelectorAll(".scaleup");
// const scaleDivs = document.querySelectorAll(".scalediv");
// const sidebar = document.querySelector(".sidebar");
// const normContainer = document.querySelector(".normContainer")
// const root = document.documentElement;
// let width = screen.width;


// toCollapse.addEventListener("click", () => {
//     width = screen.width;
//     console.log(width)
//     if (width > 888 && width < 1600) {    
//         console.log("collapsed!");
//         for (i=0; i < toRemoveOnCollapse.length; i++) {
//             toRemoveOnCollapse[i].classList.toggle("hidden");
//         }
//         logo.classList.toggle("noSee")
//         for (i=0; i < scaleUp.length; i++) {
//             scaleUp[i].classList.toggle("moveScale");
//         }
//         for (i=0; i < scaleDivs.length; i++) {
//             scaleDivs[i].classList.toggle("divScale");
//         }
//         sidebar.classList.toggle("animateToCollapse");
//         toCollapse.classList.toggle("translateBack");
//     } else {
//         toCollapse.classList.add("hidden", false);
//     }
// })

// window.addEventListener('resize', function() {
//     width = screen.width;

//     if (width <= 888) {    
//         console.log("collapsed!");
//         for (i=0; i < toRemoveOnCollapse.length; i++) {
//             toRemoveOnCollapse[i].classList.add("hidden");
//         }
//         logo.classList.add("noSee")
//         for (i=0; i < scaleUp.length; i++) {
//             scaleUp[i].classList.add("moveScale");
//         }
//         for (i=0; i < scaleDivs.length; i++) {
//             scaleDivs[i].classList.add("divScale");
//         }
//         sidebar.classList.add("animateToCollapse");
//         toCollapse.classList.add("translateBack");
//         toCollapse.classList.add("hidden", false);
//     } else if (width >= 1600) {
//         console.log("Expanded!!");
//         for (i=0; i < toRemoveOnCollapse.length; i++) {
//             toRemoveOnCollapse[i].classList.remove("hidden", false);

//         }
//         logo.classList.remove("noSee", false)
//         for (i=0; i < scaleUp.length; i++) {
//             scaleUp[i].classList.remove("moveScale", false);
//         }
//         for (i=0; i < scaleDivs.length; i++) {
//             scaleDivs[i].classList.remove("divScale", false);
//         }
//         sidebar.classList.remove("animateToCollapse", false);
//         toCollapse.classList.remove("translateBack", false);
//         toCollapse.classList.add("hidden", false);
//     }
// });

// window.addEventListener('DOMContentLoaded', function() {
//     width = screen.width;

//     if (width <= 888) {    
//         console.log("collapsed!");
//         for (i=0; i < toRemoveOnCollapse.length; i++) {
//             toRemoveOnCollapse[i].classList.add("hidden");
//         }
//         logo.classList.add("noSee")
//         for (i=0; i < scaleUp.length; i++) {
//             scaleUp[i].classList.add("moveScale");
//         }
//         for (i=0; i < scaleDivs.length; i++) {
//             scaleDivs[i].classList.add("divScale");
//         }
//         sidebar.classList.add("animateToCollapse");
//         toCollapse.classList.add("translateBack");
//         toCollapse.classList.add("hidden", false);
//     } else if (width >= 1600) {
//         console.log("Expanded!!");
//         for (i=0; i < toRemoveOnCollapse.length; i++) {
//             toRemoveOnCollapse[i].classList.remove("hidden", false);

//         }
//         logo.classList.remove("noSee", false)
//         for (i=0; i < scaleUp.length; i++) {
//             scaleUp[i].classList.remove("moveScale", false);
//         }
//         for (i=0; i < scaleDivs.length; i++) {
//             scaleDivs[i].classList.remove("divScale", false);
//         }
//         sidebar.classList.remove("animateToCollapse", false);
//         toCollapse.classList.remove("translateBack", false);
//         toCollapse.classList.add("hidden", false);
//     }
// });

