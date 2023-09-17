// AutoText typing effect JS

var typed = new Typed(".new-word", {
  strings: [" Rajat Yadav", "a Programmer", "a Student"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

// img slider js 

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};