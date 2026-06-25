const posts = [
  {
    title: 'Cómo empecé a construir este blog',
    category: 'Diseño',
    date: '24 Jun 2026',
    readTime: '4 min',
    excerpt:
      'Una primera nota sobre la idea, la estructura visual y cómo mantener el sitio ligero sin perder personalidad.',
  },
  {
    title: 'Pequeños hábitos para escribir mejor cada semana',
    category: 'Escritura',
    date: '18 Jun 2026',
    readTime: '3 min',
    excerpt:
      'Consejos prácticos para ordenar ideas, publicar con constancia y evitar el bloqueo al comenzar una entrada.',
  },
  {
    title: 'Recursos que me inspiran cuando diseño interfaces',
    category: 'Inspiración',
    date: '10 Jun 2026',
    readTime: '5 min',
    excerpt:
      'Una lista breve de referencias visuales, tipografías y criterios que ayudan a crear páginas más cuidadas.',
  },
];

const postsGrid = document.getElementById('postsGrid');
const menuButton = document.getElementById('menuButton');
const siteNav = document.getElementById('siteNav');

postsGrid.innerHTML = posts
  .map(
    (post) => `
      <article class="fade-in">
        <div class="post-meta">
          <span class="tag">${post.category}</span>
          <span>${post.date}</span>
          <span>${post.readTime}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a class="read-more" href="#">Leer más</a>
      </article>
    `
  )
  .join('');

menuButton.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

siteNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    siteNav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});