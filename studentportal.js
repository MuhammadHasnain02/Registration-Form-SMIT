// Logo & Button Groups Section
let loginField = document.getElementById("loginField")
let createAccField = document.getElementById("createAccField")

// LogIn And Create Account Section
let LoginSect = document.getElementById("LoginSect")
let CrtAccSect = document.getElementById("CrtAccSect")

// Show Section
function showSection(Section) {

    LoginSect.classList.add("hidden")
    CrtAccSect.classList.add("hidden")

    Section.classList.remove("hidden")

}

// registrationField Handling
loginField.onclick = () => {
    showSection(LoginSect);
    showBgWhite(loginField)
}
// downloadIDCardField Handling
createAccField.onclick = () => {
    showSection(CrtAccSect);
    showBgWhite(createAccField)
}

function showBgWhite(field) {

    loginField.classList.remove("bg-white", "shadow-md")
    loginField.classList.add("bg-[#F5F5F5]")

    createAccField.classList.remove("bg-white", "shadow-md")
    createAccField.classList.add("bg-[#F5F5F5]")

    field.classList.remove("bg-[#F5F5F5]")
    field.classList.add("bg-white", "shadow-md")
}