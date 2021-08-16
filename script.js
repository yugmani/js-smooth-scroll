document.getElementById('nav-bar').addEventListener('click', function(e) {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains('link-a')) {
    const id = target.getAttribute('href').slice(1);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
});
