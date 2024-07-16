// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const navbar = document.getElementById('navbar');
const colors = ['#ff0000', '#00ff00', '#0000ff']; // Red, Green, Blue
let currentColor = 0;

function changeColor() {
  navbar.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}

setInterval(changeColor, 1000); // Change color every second
// Mendapatkan tombol
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Ketika pengguna menggulir halaman ke bawah 20px dari bagian atas dokumen, tombol muncul
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Ketika pengguna mengklik tombol, gulir ke bagian atas dokumen
function scrollToTop() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
}
