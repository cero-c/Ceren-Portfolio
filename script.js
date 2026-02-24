const filters = document.querySelectorAll('#projects [data-filter]');
const cards = document.querySelectorAll('#projects [data-category]');

filters.forEach((btn) => {
  btn.addEventListener('click', () => {

    filters.forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      const category = card.dataset.category;
      const show = (filter === 'all' || category === filter);
      card.hidden = !show;
    });
  });
});