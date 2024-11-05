// JavaScript functionality can be added here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
    // Add your interactive functionality here
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah perilaku default dari tautan

        const targetId = this.getAttribute('href'); // Mendapatkan ID target
        const targetElement = document.querySelector(targetId); // Mencari elemen target

        // Menggulir ke elemen target dengan efek halus
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('modal').style.display = 'flex'; // Tampilkan modal
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Sembunyikan modal
}