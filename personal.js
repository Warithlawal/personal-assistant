window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const sideMenu = document.getElementById('sidemenu');
const overlay = document.getElementById('overlay');
const body = document.body;

function openmenu() {
    sideMenu.style.right = "0";
    overlay.style.display = "block";
    body.classList.add('no-scroll');
}

function closemenu() {
    sideMenu.style.right = "-300px";
    overlay.style.display = "none";
    body.classList.remove('no-scroll');
    body.style.filter = "none";
}

overlay.addEventListener('click', closemenu);


const contactForm = document.getElementById('applicationForm'),
      contactMessage = document.getElementById('contact-message'),
      application = document.getElementById('form_container');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_km7balj', 'template_uz9rorp', '#applicationForm', 'Cshuz3q2Ul1WqyboJ')
    .then(() => {
        application.style.display = 'none';  // Hide the form
        contactMessage.style.display = 'block'; // Show the message

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.textContent = ''; // Clear the message text
        }, 5000);

        contactForm.reset();
    })
    .catch((error) => {
        contactMessage.style.display = 'block'; // Show the message
        contactMessage.innerHTML = '<img src="images/error.png" alt="Error"><span>Failed to send application. Please try again later.</span>';

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.innerHTML = ''; // Clear the message text
        }, 5000);
    });
};

contactForm.addEventListener('submit', sendEmail);
