// Sections
let registrFormSect = document.getElementById("registrFormSect")
let downloadIdCardSect = document.getElementById("downloadIdCardSect")
let resultsSect = document.getElementById("resultsSect")

// Fields
let registrationField = document.getElementById("registrationField")
let downloadIDCardField = document.getElementById("downloadIDCardField")
let resultsField = document.getElementById("resultsField")

// Show Section
function showSection(Section) {

    registrFormSect.classList.add("hidden")
    downloadIdCardSect.classList.add("hidden")
    resultsSect.classList.add("hidden")

    Section.classList.remove("hidden")

}

// Show Text Color
function showTxtClr(field) {

    registrationField.style.color = "#0d6db7"
    downloadIDCardField.style.color = "#0d6db7"
    resultsField.style.color = "#0d6db7"

    field.style.color = "#8dc63f"

}

// registrationField Handling
registrationField.onclick = () => {
    showSection(registrFormSect);
    showTxtClr(registrationField);
}
// downloadIDCardField Handling
downloadIDCardField.onclick = () => {
    showSection(downloadIdCardSect);
    showTxtClr(downloadIDCardField);
}
// resultsField Handling
resultsField.onclick = () => {
    showSection(resultsSect);
    showTxtClr(resultsField);
}

