window.addEventListener('load', e => {
  const loading = document.getElementById('loading');
  const content = document.getElementById('main');

  content.style.opacity = 1;
  document.body.removeChild(loading);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }
  
  const observer = new IntersectionObserver( entries => {
    entries
      .filter( entry => entry.isIntersecting)
      .forEach( observerEntry => {
        if(observerEntry.target.style.width === '0%'){
          const expPct = observerEntry.target.getAttribute('data-expereience-pct');
          observerEntry.target.style.width = expPct + '%';
        }
      });
  }, options);

  [...document.querySelectorAll('.exped')].forEach( el => observer.observe(el));
});