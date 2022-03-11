const body = document.querySelector("body");

function resizeColorChange() {
  let width = window.innerWidth;
  const colorBiggest = "tomato";
  const colorMedium = "blue";
  const colorSmall = "purple";
  if (width > 1000) {
    body.classList.add(colorBiggest);
    body.classList.remove(colorMedium, colorSmall);
  } else if (width <= 1000 && width > 800) {
    body.classList.remove(colorBiggest);
    body.classList.add(colorMedium);
    body.classList.remove(colorSmall);
  } else {
    body.classList.remove(colorMedium);
    body.classList.add(colorSmall);
  }
}

window.addEventListener("resize", resizeColorChange);
