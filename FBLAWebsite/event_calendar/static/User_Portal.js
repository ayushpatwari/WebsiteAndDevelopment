let sidebar = document.querySelector(".sidebar");
let toggle = document.querySelector("#toggle");
let searchBtn = document.querySelector(".search-box");


toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
    toggle.classList.toggle("rotate"); // Add this line to toggle the rotated class
});

searchBtn.addEventListener("click", () =>{
    sidebar.classList.remove("close");
});