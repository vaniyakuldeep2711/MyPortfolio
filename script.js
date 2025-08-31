// Active nav highlight
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => { if (pageYOffset >= sec.offsetTop - 80) current = sec.id; });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });

  // Scroll animation
  const animated = document.querySelectorAll('[data-animate]');
  const revealOnScroll = () => {
    animated.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('active');
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Dark/Light Mode Toggle
  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;
  if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark'); toggleBtn.textContent = "☀️";
  }
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    if(body.classList.contains('dark')) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem('theme','dark');
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem('theme','light');
    }
  });