// Navbar Navigation

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', handleNavClick);
});

function handleNavClick (e) {
  e.preventDefault();
  const id = e.target.innerHTML;
  const element = document.getElementById(id.toLowerCase());

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  });
}

// Footer Navigation

const footerLink = document.querySelector('footer .img-container img');

footerLink.addEventListener('click', handleFooterNavClick);

function handleFooterNavClick (e) {
  e.preventDefault();

  const element = document.getElementsByTagName('header')[0];

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}

// Form Submission

const form = document.querySelector('.appointments-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit (e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
}
