let articles = document.querySelectorAll('.article-item');
let filter = document.querySelector('.select-article');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.setAttribute('hidden', 'hidden');
    } else {
      article.removeAttribute('hidden', 'hidden');
    }
  }
};
