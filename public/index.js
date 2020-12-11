
// if you want to change the os default to dark
// window.matchMedia("(prefers-color-scheme: dark)");

// if you want to change the os default to light
// window.matchMedia("(prefers-color-scheme: light)");

//allows the toggle
let toggle = true;

const btn = document
  .getElementById("btnToggle")
  .addEventListener("click", (e) => {
    console.log("clicked")
    if (!toggle) {
      toggle = true;
      // removes dark from html tag
      document.querySelector("html").classList.remove("dark");
    } else {
      toggle = false;
      //adds dark to the html tag
      document.querySelector("html").classList.add("dark");
    }
  });
