let sidebar = document.querySelector(".sidebar");
let toggle = document.querySelector("#toggle");



toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
    toggle.classList.toggle("rotate");
});

