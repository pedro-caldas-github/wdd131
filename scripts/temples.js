const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.textContent = '☰';

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open'); 
    
    if (navigation.classList.contains('open')) {
        menuButton.textContent = 'X';
    } else {
        menuButton.textContent = '☰';
    }
});