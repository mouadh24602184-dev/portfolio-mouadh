(function () {
  const data = window.PORTFOLIO_DATA || {};

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  };
  const setHref = (id, href) => {
    const el = document.getElementById(id);
    if (el && href) el.setAttribute('href', href);
  };
  const esc = (str) => String(str ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  setText('hero-name', `${data.name || 'Mouadh Jemai'}.`);
  setText('hero-title', data.headline || 'Portfolio professionnel');
  setText('hero-intro', data.intro || 'Bienvenue sur mon portfolio.');
  setText('hero-location', data.location || 'Montréal, Québec');
  setText('hero-role', data.role || 'Soutien informatique');
  setText('about-text', data.about || 'Présentation à venir.');
  setText('contact-email', data.email || 'mouadh24602184@gmail.com');
  setText('contact-phone', data.phone || '263-566-8722');
  setText('year', new Date().getFullYear());

  setHref('email-link', `mailto:${data.email || 'mouadh24602184@gmail.com'}`);
  setHref('phone-link', `tel:${(data.phone || '').replace(/[^\d+]/g, '')}`);
  setHref('linkedin-link', data.linkedin || '#');
  setHref('linkedin-hero', data.linkedin || '#');
  setHref('cv-hero', data.cv || '#');

  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skillsGrid.innerHTML = (data.skillGroups || []).map(group => `
      <article>
        <h3>${esc(group.title)}</h3>
        <ul class="skill-list">
          ${(group.items || []).map(item => `<li>${esc(item)}</li>`).join('')}
        </ul>
      </article>
    `).join('');
  }

  const experienceList = document.getElementById('experience-list');
  if (experienceList) {
    experienceList.innerHTML = (data.experience || []).map(item => `
      <article class="timeline-item">
        <div class="item-top">
          <div>
            <strong>${esc(item.title)}</strong><br>
            <span>${esc(item.company)}</span>
          </div>
          <span class="item-period">${esc(item.period)}</span>
        </div>
        <div class="item-location">${esc(item.location || '')}</div>
        <p>${esc(item.description || '')}</p>
      </article>
    `).join('');
  }

  const educationList = document.getElementById('education-list');
  if (educationList) {
    educationList.innerHTML = (data.education || []).map(item => `
      <article class="timeline-item">
        <div class="item-top">
          <div>
            <strong>${esc(item.title)}</strong><br>
            <span>${esc(item.school)}</span>
          </div>
          <span class="item-period">${esc(item.period)}</span>
        </div>
        <p>${esc(item.detail || '')}</p>
      </article>
    `).join('');
  }

  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = (data.projects || []).map(item => `
      <article>
        <span class="project-tag">${esc(item.tag || 'Projet')}</span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description || '')}</p>
      </article>
    `).join('');
  }

  const reportsGrid = document.getElementById('reports-grid');
  if (reportsGrid) {
    reportsGrid.innerHTML = (data.reports || []).map(item => {
      const files = Array.isArray(item.files) ? item.files : (item.file ? [{ label: 'Lire le rapport (PDF)', href: item.file }] : []);
      const image = /^assets\/[a-z0-9_-]+\.(png|jpe?g|webp)$/i.test(item.image || '') ? `<img class="report-image" src="${esc(item.image)}" alt="Aperçu du projet : ${esc(item.title)}" loading="lazy">` : '';
      const buttons = files.filter(file => /^documents\/[a-z0-9_-]+\.(pdf|pptx)$/i.test(file.href || '')).map((file, i) =>
        `<a class="btn ${i === 0 ? 'btn-main' : 'btn-ghost'}" href="${esc(file.href)}" target="_blank" rel="noopener noreferrer">${esc(file.label || 'Ouvrir le document')} <span aria-hidden="true">↗</span></a>`).join('');
      return `
        <article class="report-card">
          ${image}
          <div class="report-body">
            <span class="report-label">${esc(item.eyebrow || 'Document')}</span>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.description || '')}</p>
            <div class="report-actions">${buttons || '<span class="report-note">Document à venir</span>'}</div>
          </div>
        </article>
      `;
    }).join('');
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
