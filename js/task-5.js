function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
widget.style.backgroundColor = "#fafafa";
const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");
const changeColor = () => {
  const currentColor = getRandomHexColor();
  spanColor.style.color = currentColor;
  body.style.backgroundColor = currentColor;
}
btnChangeColor.addEventListener("click", changeColor);

const head = document.querySelector("head");
const monseratFontLinks = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>;`

head.insertAdjacentHTML("beforeEnd", monseratFontLinks);