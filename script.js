const sections = document.querySelectorAll('.section');
const controlBtnsContainer = document.querySelector('.controls');
const controlBtns = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');

function pageTransition() {
  // Button click active class
  controlBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      let currentBtn = document.querySelector('.active-btn');

      currentBtn.className = currentBtn.className.replace('active-btn', '');
      this.className += ' active-btn';

      changePages(e);
    });
  });
}

pageTransition();

function changePages(e) {
  const id = e.target.dataset.id;

  // Hide other sections
  sections.forEach((section) => {
    section.classList.remove('active');
  });

  const element = document.getElementById(id);
  element.classList.add('active');
}
