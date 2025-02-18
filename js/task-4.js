const head = document.querySelector("head");
const monseratFontLinks = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>;`
head.insertAdjacentHTML("beforeEnd", monseratFontLinks);
const loginForm = document.querySelector(".login-form");
for (const item of loginForm.children) {
    if (item !== loginForm.children[2]) {
    item.classList.add("task4-form-label");
    for (const input of item.children) {
        input.classList.add("task4-form-input", "form-input");
        if (input) {
            input.addEventListener("focus", () => {
    input.placeholder = "Type area"
            })
            input.addEventListener("blur", () => {
                input.placeholder = "";
            })
        }
    }
    }
    else {
       item.classList.add("task4-form-btn"); 
    }
};
loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {
console.log (`All form fields must be filled in`)
    return;
    }
    console.log(`${form.elements.email.name}: ${email.trim()} ; ${form.elements.password.name}: ${password.trim()}`);
    form.reset();
    return;
})

