// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const service = formData.get('service');
            const budget = formData.get('budget');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !service || !budget || !message) {
                alert('Harap isi semua field yang wajib diisi!');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show an alert
            alert('Terima kasih! Permintaan project Anda telah berhasil dikirim. Saya akan menghubungi Anda segera.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-link');
    const menuLength = menuItems.length;
    
    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].href === currentLocation) {
            menuItems[i].className = "nav-link active";
        }
    }
});

// Enhanced form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const budget = document.querySelector('input[name="budget"]:checked');
    const message = document.getElementById('message').value;
    const agree = document.getElementById('agree');

    if (!name || !email || !service || !budget || !message || !agree.checked) {
        alert('Harap isi semua field yang wajib diisi (ditandai dengan *)');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid');
        return false;
    }

    return true;
}

// Update form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                return;
            }
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }
            
            // Show success message
            alert('Terima kasih! Permintaan project Anda telah berhasil dikirim.\n\nSaya akan menghubungi Anda dalam 1-2 hari kerja.\n\nDetail yang dikirim:\n- Nama: ' + formObject.name + '\n- Layanan: ' + formObject.service + '\n- Budget: ' + formObject.budget);
            
            // Reset form
            contactForm.reset();
        });
    }
});