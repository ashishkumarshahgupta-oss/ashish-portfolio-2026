```javascript
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(
    ".section-label, .section-title, .about-card, .skill-card, .project-card, .education-card, .contact-card"
);

revealElements.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("visible"));
}
```
```javascript
document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreens = document.querySelectorAll("#welcome-screen");

    // Keep only the first welcome screen
    welcomeScreens.forEach((screen, index) => {
        if (index > 0) {
            screen.remove();
        }
    });

    // Remove extra welcome sections from the page
    document.querySelectorAll(".welcome-section, .welcome-container, .welcome-message").forEach(element => {
        if (!element.closest("#welcome-screen")) {
            element.remove();
        }
    });
});
```
```javascript
// ===== ADVANCED WELCOME SCREEN =====

document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("welcome-screen");
    const button = document.getElementById("enter-portfolio");
    const typing = document.getElementById("welcome-typing");
    const particles = document.getElementById("welcome-particles");

    if (!screen || !button) return;

    // Animated typing effect
    const roles = [
        "CSE AIML Student",
        "Future ML Engineer",
        "Python Programmer",
        "AI Enthusiast"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeRole() {
        if (!typing || screen.classList.contains("welcome-hidden")) return;

        const currentRole = roles[roleIndex];

        typing.textContent = currentRole.substring(0, charIndex);

        if (!deleting) {
            charIndex++;

            if (charIndex > currentRole.length) {
                deleting = true;
                setTimeout(typeRole, 1200);
                return;
            }
        } else {
            charIndex--;

            if (charIndex < 0) {
                charIndex = 0;
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeRole, deleting ? 45 : 90);
    }

    typeRole();

    // Floating background particles
    if (particles) {
        for (let i = 0; i < 22; i++) {
            const particle = document.createElement("span");
            particle.className = "welcome-particle";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.animationDuration = (6 + Math.random() * 8) + "s";
            particle.style.animationDelay = (Math.random() * 8) + "s";
            particle.style.width = (3 + Math.random() * 4) + "px";
            particle.style.height = particle.style.width;
            particles.appendChild(particle);
        }
    }

    // Enter portfolio
    button.addEventListener("click", function () {
        screen.classList.add("welcome-hidden");

        setTimeout(function () {
            screen.remove();
        }, 750);
    });
});
``````javascript
// Dark / Light Mode
const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const darkMode = document.body.classList.contains("dark-mode");

        themeButton.textContent = darkMode ? "☀️" : "🌙";
        themeButton.setAttribute(
            "aria-label",
            darkMode ? "Switch to light mode" : "Switch to dark mode"
        );

        localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    });

    if (localStorage.getItem("portfolio-theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "☀️";
        themeButton.setAttribute("aria-label", "Switch to light mode");
    }
}

// Scroll Reveal Animation
const revealSections = document.querySelectorAll(
    ".content-section, .hero, footer"
);

revealSections.forEach(section => section.classList.add("reveal"));

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealSections.forEach(section => revealObserver.observe(section));

// Back to Top Button
const backToTop = document.createElement("button");

backToTop.id = "back-to-top";
backToTop.textContent = "↑";
backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 350);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
```
```javascript
// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuButton.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.textContent = "☰";
    });
});

// Typing animation
const typingText = document.getElementById("typing-text");
const phrases = [
    "intelligent solutions.",
    "creative projects.",
    "the future with AI."
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const phrase = phrases[phraseIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = phrase.substring(0, characterIndex);

    let delay = deleting ? 35 : 75;

    if (!deleting && characterIndex === phrase.length) {
        deleting = true;
        delay = 1500;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typeEffect();
}

// Interactive 3D profile card
const heroVisual = document.getElementById("hero-visual");
const profileCard = document.querySelector(".profile-card");

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    heroVisual.addEventListener("mousemove", event => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        profileCard.style.animation = "none";
        profileCard.style.transform =
            `rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`;
    });

    heroVisual.addEventListener("mouseleave", () => {
        profileCard.style.transform = "";
        profileCard.style.animation = "";
    });
}

// Scroll reveal
const revealElements = document.querySelectorAll(
    ".content-section, .stats, .contact-section, footer"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}

// Back-to-top button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animated background particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];
let animationFrame;
const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const particleCount = Math.min(
        65,
        Math.floor(window.innerWidth / 20)
    );

    particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.6 + 0.5,
        speed: Math.random() * 0.35 + 0.08
    }));

    drawParticles();
}

function drawParticles() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(167, 139, 250, 0.65)";
        ctx.fill();

        if (!reduceMotion) {
            particle.y -= particle.speed;

            if (particle.y < -5) {
                particle.y = window.innerHeight + 5;
                particle.x = Math.random() * window.innerWidth;
            }
        }

        for (let j = index + 1; j < particles.length; j++) {
            const other = particles[j];
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle =
                    `rgba(139, 92, 246, ${0.12 * (1 - distance / 100)})`;
                ctx.stroke();
            }
        }
    });

    if (!reduceMotion) {
        animationFrame = requestAnimationFrame(drawParticles);
    }
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
```
// ASHISH OS controls

const osScreen = document.getElementById("ashish-os");
const openOSButton = document.getElementById("open-os");
const closeOSButton = document.getElementById("close-os");

function closeOSWindows() {
    document.querySelectorAll(".os-window").forEach(windowElement => {
        windowElement.classList.remove("window-open");
    });
}

openOSButton.addEventListener("click", () => {
    osScreen.classList.add("os-active");
    document.body.style.overflow = "hidden";
});

closeOSButton.addEventListener("click", () => {
    osScreen.classList.remove("os-active");
    document.body.style.overflow = "";
    closeOSWindows();
});

document.querySelectorAll(".os-app").forEach(app => {
    app.addEventListener("click", () => {
        closeOSWindows();

        const targetWindow = document.getElementById(
            app.dataset.window
        );

        if (targetWindow) {
            targetWindow.classList.add("window-open");
        }
    });
});

document.querySelectorAll(".window-close").forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".os-window").classList.remove("window-open");
    });
});

// Live clock
function updateOSClock() {
    const clock = document.getElementById("os-clock");

    clock.textContent = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

updateOSClock();
setInterval(updateOSClock, 1000);

// Escape key closes windows or exits OS
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && osScreen.classList.contains("os-active")) {
        const openWindow = document.querySelector(
            ".os-window.window-open"
        );

        if (openWindow) {
            openWindow.classList.remove("window-open");
        } else {
            osScreen.classList.remove("os-active");
            document.body.style.overflow = "";
        }
    }
});
