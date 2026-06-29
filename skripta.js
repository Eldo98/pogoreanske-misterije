const slika = document.querySelector('.klikSlika');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Klik na sliku → prikaže prozor
slika.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Klik na X → zapre prozor
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Klik izven prozora → zapre prozor
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
