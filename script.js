const mobileToggle = document.querySelector('.mobile-toggle');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.site-header');
const contactForm = document.querySelector('#contact-form');

mobileToggle?.setAttribute('aria-expanded', 'false');

mobileToggle?.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navList?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (!name || !phone || !email || !message) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  alert(`Obrigado, ${name}! Sua solicitação foi recebida com sucesso. Entraremos em contato em breve.`);
  contactForm.reset();
});
