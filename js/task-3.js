const nameInput = document.querySelector("#name-input");
nameInput.classList.add("task3-form-input", "form-input");
const nameOutput = document.querySelector("#name-output");
nameOutput.parentElement.classList.add("task3-Header");
nameInput.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue === "") {
        nameOutput.textContent = "Anonymous";
    }
    else {
        nameOutput.textContent = inputValue; 
    }
});

const head = document.querySelector("head");
const monseratFontLinks = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>;`

head.insertAdjacentHTML("beforeEnd", monseratFontLinks);