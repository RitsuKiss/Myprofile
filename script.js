document.getElementById('menu').addEventListener('click', function () {
    const menu = document.getElementById('navbar');
    menu.classList.toggle('open');
});
function openig() {
    window.location.href = 'https://www.instagram.com/ritsu.kiss';
}
function opendc() {
    window.location.href = 'https://www.google.com';
}
function openrt() {
    window.location.href = 'https://reality.app/profile/f3842e54?adj_t=8ogcewh_z9yhix5';
}
function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

   var sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');

   var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

   var linkToActivate = document.getElementById(sectionId + 'Link');
    linkToActivate.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
const bannerImages = document.querySelector('.banner-images');
const images = bannerImages.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateBannerPosition() {
    bannerImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBannerPosition();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBannerPosition();
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

setInterval(showNextImage, 3000); // Ganti gambar setiap 3 detik
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});
