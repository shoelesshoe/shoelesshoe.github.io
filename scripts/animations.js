"use strict";

function applyCSSOnScreen(toggleClass, targetClass) {
  const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
      entry.target.classList.toggle(toggleClass, entry.isIntersecting); // isIntersecting checks whether element is in viewport
    });
  });
  
  const hiddenElements = document.querySelectorAll(targetClass);
  hiddenElements.forEach((element) => observer.observe(element));
}

applyCSSOnScreen("appear-from-side", ".hidden-left, .hidden-right");
applyCSSOnScreen("appear-gradually", ".hidden");