function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
}

function updateWindChill() {
    const temperature = 10; 
    const windSpeed = 5; 
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById('windchill').textContent = `${windChill.toFixed(1)} °C`;
    } else {
        document.getElementById('windchill').textContent = "N/A";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateFooter();
    updateWindChill();
});