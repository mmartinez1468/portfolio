/* Opens and Closes Menu */
const overlay = document.getElementById('overlay');
const menuOpenButton = document.getElementById('menuOpen');
const menuCloseButton = document.getElementById('menuClose');

menuOpenButton.addEventListener('click', () => {
    overlay.classList.add('active'); // Show overlay
    
    overlay.querySelector('.overlayNav').classList.add('fadeInUp'); // Start fade-in animation
    overlay.querySelector('.marcosContact').classList.add('fadeInDown');
});

menuCloseButton.addEventListener('click', () => {
    overlay.classList.remove('active'); // Hide overlay
    
    overlay.querySelector('.overlayNav').classList.remove('fadeInUp'); // Remove fade-in class
    overlay.querySelector('.marcosContact').classList.remove('fadeInDown');
});



