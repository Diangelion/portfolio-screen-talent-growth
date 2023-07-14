"use strict";

// active navbar
let btn = document.querySelectorAll(".button");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// dropdown
function showDropdown() {
  let nav = document.getElementById("navbar");
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
}
