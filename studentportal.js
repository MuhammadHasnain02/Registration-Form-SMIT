// Logo & Button Groups Section
let loginField = document.getElementById("loginField")
let createAccField = document.getElementById("createAccField")
let LoginStdBtn = document.getElementById("LoginStdBtn")
let LoginTeachrBtn = document.getElementById("LoginTeachrBtn")

// LogIn And Create Account Section
let btnGroupSect = document.getElementById("btnGroupSect")
let LoginSect = document.getElementById("LoginSect")
let CrtAccSect = document.getElementById("CrtAccSect")
let LoginTeachrSect = document.getElementById("LoginTeachrSect")

// Show Section
function showSection(Section) {
    
    btnGroupSect.classList.add("hidden")
    LoginSect.classList.add("hidden")
    CrtAccSect.classList.add("hidden")
    LoginTeachrSect.classList.add("hidden")

    Section.classList.remove("hidden")

}

// Show Bg-white Section
function showBgWhite(field) {

    loginField.classList.remove("bg-white", "shadow-md")
    loginField.classList.add("bg-[#F5F5F5]")

    createAccField.classList.remove("bg-white", "shadow-md")
    createAccField.classList.add("bg-[#F5F5F5]")

    field.classList.remove("bg-[#F5F5F5]")
    field.classList.add("bg-white", "shadow-md")

}

// 🔹 Handlers

loginField.onclick = () => {

    showSection(LoginSect);
    btnGroupSect.classList.remove("hidden")
    showBgWhite(loginField)

};

createAccField.onclick = () => {

    showSection(CrtAccSect);
    btnGroupSect.classList.remove("hidden")
    showBgWhite(createAccField)

};

LoginStdBtn.onclick = () => {

    showSection(LoginSect);
    btnGroupSect.classList.remove("hidden")

};

LoginTeachrBtn.onclick = () => {

    showSection(LoginTeachrSect);
    btnGroupSect.classList.add("hidden")
    
};