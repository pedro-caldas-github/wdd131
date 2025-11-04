const today = new Date();

const currentYear = today.getFullYear();

const copyrightElement = document.getElementById("copyright-year");

if (copyrightElement) {
    copyrightElement.textContent = copyrightElement.textContent.replace("2025", currentYear);
} else {
    console.error("Element with ID 'copyright-year' not found.");
}


const lastModifiedElement = document.getElementById("lastModified");

if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
} else {
    console.error("Element with ID 'lastModified' not found.");
}