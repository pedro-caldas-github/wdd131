// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Using the formula for metric units (temperature in °C, wind speed in km/h)
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Function to update footer with current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
}

// Function to update wind chill display
function updateWindChill() {
    const temperature = 10; // Static temperature value in °C
    const windSpeed = 5; // Static wind speed value in km/h
    
    // Check if conditions are met for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById('windchill').textContent = `${windChill.toFixed(1)} °C`;
    } else {
        document.getElementById('windchill').textContent = "N/A";
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateFooter();
    updateWindChill();
});