window.addEventListener('load', e => {
  const loading = document.getElementById('loading');
  const content = document.getElementById('main');

  content.style.opacity = 1;
  document.body.removeChild(loading);

  document.querySelector('.print-cv').addEventListener('click', e => window.print());

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }

  const getPct = stage => {
    switch(stage) {
      case 'one': {
        return 20;
      }
      case 'two': {
        return 40;
      }
      case 'three': {
        return 60;
      }
      case 'four': {
        return 80;
      }
    }
  };

  const getLanguagePct = stage => {
    switch(stage) {
      case 'one': {
        return 100 / 6 * 1;
      }
      case 'two': {
        return 100 / 6 * 2;
      }
      case 'three': {
        return 100 / 6 * 3;
      }
      case 'four': {
        return 100 / 6 * 4;
      }
      case 'five': {
        return 100 / 6 * 5;
      }
    }
  };
  
  const observer = new IntersectionObserver( entries => {
    entries
      .filter( entry => entry.isIntersecting)
      .forEach( observerEntry => {
        console.log(observerEntry.target.className)



        
        if(observerEntry.target.className === 'exped exped-left'){
          if(observerEntry.target.style.width === '0%'){
            const stage = observerEntry.target.getAttribute('data-expereience-stage');
            observerEntry.target.style.width = getLanguagePct(stage) + '%';
          }
        } else {
          if(observerEntry.target.style.width === '0%'){
            const stage = observerEntry.target.getAttribute('data-expereience-stage');
            observerEntry.target.style.width = getPct(stage) + '%';
          }
        }

      });
  }, options);

  [...document.querySelectorAll('.exped')].forEach( el => observer.observe(el));
});

