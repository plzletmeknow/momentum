const title = document.querySelector("body h2");

const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "The mouse is here!";
  },
  handleMouseLeave: function () {
    title.innerText = "The mouse is gone!";
  },
  handleWindowResize: function () {
    title.innerText = "You just resized!";
  },
  handleMouseRightClick: function () {
    title.innerText = "That was a right click!";
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleMouseRightClick);
