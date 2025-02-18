const head = document.querySelector("head");
const monseratFontLinks = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>;`

head.insertAdjacentHTML("beforeEnd", monseratFontLinks);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector("#controls");
controlsDiv.classList.add("task6-control-div")
const input = controlsDiv.children[0];
input.classList.add("task6-input");
const createBtn = controlsDiv.children[1];
createBtn.classList.add("task6-create-btn")
const destroyBtn = controlsDiv.children[2];
destroyBtn.classList.add("task6-destroy-btn")
const boxesDiv = document.querySelector("#boxes");
boxesDiv.classList.add("task6-boxes-div");
function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
function createBoxes(boxQuantity) {
  destroyBoxes();
  let boxSize = 20;
  for (let i = 1; i <= boxQuantity; i++){
    let boxColor = getRandomHexColor();
    const box = document.createElement("div");
    box.id = `box${i}`;
    box.classList.add("task6-box")
    boxSize += 10;
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = boxColor;
    boxesDiv.append(box);
  }
}

createBtn.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
    input.value = "";
  }
})

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
})

