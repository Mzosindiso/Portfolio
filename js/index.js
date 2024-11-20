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

document.addEventListener('DOMContentLoaded', () => {
    const bounceElements = document.querySelectorAll('.bounce-text');
    bounceElements.forEach((element, index) => {
        element.style.setProperty('--item-number', index);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successPopup = document.getElementById('successPopup');
    let lastSubmissionTime = 0;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Check if 10 seconds have passed since the last submission
        const currentTime = Date.now();
        if (currentTime - lastSubmissionTime < 10000) {
            alert('Please wait 10 seconds before submitting another message.');
            return;
        }

        // Basic form validation
        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const phone = form.elements['phone'].value.trim();
        const message = form.elements['message'].value.trim();

        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Send form data to FormBold
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => {
            if (response.ok) {
                form.reset();
                showSuccessPopup();
                lastSubmissionTime = currentTime;
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showSuccessPopup() {
        successPopup.style.display = 'block';
        setTimeout(() => {
            successPopup.style.display = 'none';
        }, 3000);
    }
});

// Scroll to top functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) { // Show button after scrolling down 300px
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});