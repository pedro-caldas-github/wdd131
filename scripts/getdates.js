const today = new Date();
const currentYear = today.getFullYear();
const copyrightElement = document.getElementById("copyright-year");
const lastModifiedElement = document.getElementById("lastModified");

if (copyrightElement) {
    // Insere o ano atual no SPAN do copyright.
    copyrightElement.textContent = currentYear;
}

if (lastModifiedElement) {
    // Insere a data da última modificação.
    lastModifiedElement.textContent = document.lastModified;
}