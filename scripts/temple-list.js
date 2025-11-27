// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tarawa Kiribati",
    location: "Ambo Tarawa Kiribati",
    dedicated: "estimated to be completed in mid-2027",
    area: 10000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tarawa-kiribati-temple/tarawa-kiribati-temple-19083-main.jpg"
  },
  {
    templeName: "Port Moresby Papua New Guinea",
    location: "Muniogo Crescent Badili, Papua New Guinea",
    dedicated: "2023, april, 22",
    area: 9550,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/port-moresby-papua-new-guinea-temple/port-moresby-papua-new-guinea-temple-11739-main.jpg"
  },
  {
    templeName: "Fairbanks Alaska",
    location: "Fairbanks Alaska, United States",
    dedicated: "2025, september, 27",
    area: 10000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fairbanks-alaska-temple/fairbanks-alaska-temple-55375-main.jpg"
  }
];

// Function to create temple cards
function createTempleCards(filteredTemples = temples) {
    const container = document.getElementById('temple-container');
    container.innerHTML = '';
    
    if (filteredTemples.length === 0) {
        container.innerHTML = '<div class="no-temples">No temples found for this filter.</div>';
        return;
    }
    
    filteredTemples.forEach(temple => {
        container.innerHTML += `
            <section>
                <h3>${temple.templeName}</h3>
                <p><span class="label">Location:</span> ${temple.location}</p>
                <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
                <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
            </section>
        `;
    });
}

// Função para atualizar link ativo
function setActiveLink(activeLink) {
    document.querySelectorAll('.navigation a').forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    createTempleCards(); // Mostra todos os templos inicialmente
    
    // Configura todos os event listeners de uma vez
    const links = {
        '#home': temples,
        '#old': temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900),
        '#new': temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000),
        '#large': temples.filter(t => t.area > 90000),
        '#small': temples.filter(t => t.area < 10000)
    };
    
    // Adiciona os event listeners
    Object.keys(links).forEach(selector => {
        document.querySelector(selector).addEventListener('click', (e) => {
            e.preventDefault();
            setActiveLink(e.target);
            createTempleCards(links[selector]);
        });
    });
});