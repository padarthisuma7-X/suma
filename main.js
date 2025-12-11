// extracted JS from original - kept inline logic

// 1. Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// 2. Navbar Glass Effect on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('glass', 'shadow-md');
        navbar.classList.remove('bg-transparent', 'py-6');
        navbar.classList.add('py-4');
    } else {
        navbar.classList.remove('glass', 'shadow-md', 'py-4');
        navbar.classList.add('bg-transparent', 'py-6');
    }
});

// 3. Typewriter Effect
const textElement = document.getElementById('typewriter');
const phrases = ["3rd-Year ECE Student.", "Embedded Systems Enthusiast.", "IoT Innovator.", "Co-Founder of StreetR."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    if (textElement) type();
});

// 4. Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// Trigger once on load
reveal();

// 5. Contact Form Handler (Simulation)
function handleContact(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const feedback = document.getElementById('form-feedback');
    const originalText = btn.innerText;

    btn.innerText = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = originalText;
        btn.disabled = false;
        feedback.classList.remove('hidden');
        e.target.reset();

        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 4000);
    }, 1500);
}

const contactForm = document.getElementById('contact-form') || document.querySelector('form[onsubmit]');
if (contactForm) {
    contactForm.addEventListener('submit', handleContact);
}

// 6. Active Link Highlighter
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((li) => {
        li.classList.remove("text-primary");
        if (li.getAttribute("href").includes(current)) {
            li.classList.add("text-primary");
        }
    });
});
