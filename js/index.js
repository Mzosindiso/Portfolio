const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

    document.addEventListener('DOMContentLoaded', function() {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            preferredCountries: ['za', 'us', 'gb'], // Adjust this list as needed
            separateDialCode: true
        });
    });

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill__bar-inner');
    const windowHeight = window.innerHeight;

    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < windowHeight) {
            bar.style.width = bar.parentElement.dataset.progress;
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

document.addEventListener('DOMContentLoaded', function() {
    const certificatesList = document.querySelector('.certificates__list');
    const certificates = document.querySelectorAll('.certificate__item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const popup = document.getElementById('certificate-popup');
    const closePopup = document.getElementById('close-popup');
    const certificateFrame = document.getElementById('certificate-frame');
    let currentIndex = 0;

    // Carousel functionality
    function showCertificate(index) {
        certificatesList.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
        showCertificate(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % certificates.length;
        showCertificate(currentIndex);
    });

    // Popup functionality
    document.querySelectorAll('.btn-view-certificate').forEach(btn => {
        btn.addEventListener('click', function() {
            const pdfUrl = this.getAttribute('data-pdf');
            certificateFrame.src = pdfUrl;
            popup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        certificateFrame.src = '';
    });
});