const body = document.querySelector("body"),
         nav = document.querySelector("nav"),
         modeToggle = document.querySelector(".dark-light"),
         searchToggle = document.querySelector(".searchToggle");
         
// js to togglr dark and light mode
modeToggle.addEventListener("click", () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
});

// js to togglr search bos
searchToggle.addEventListener("click", () =>{
   searchToggle.classList.toggle("active")
});

