const sections = document.querySelectorAll('.section');
const controlBtnsContainer = document.querySelector('.controls');
const controlBtns = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');

function pageTransition() {
  // Button click active class
  controlBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      let currentBtn = document.querySelector('.active-btn');

      currentBtn.className = currentBtn.className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  });

  //   for (let i = 0; i < controlBtns.length; i++) {
  //     controlBtns[i].addEventListener('click', function () {
  //       let currentBtn = document.querySelector('.active-btn');

  //       currentBtn.className = currentBtn.className.replace('active-btn', '');
  //       this.className += ' active-btn';
  //     });
  //   }
}

pageTransition();

// controlBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     removeAll();

//     btn.classList.add('active-btn');
//   });
// });

// function removeAll() {
//   controlBtns.forEach((btn) => {
//     btn.classList.remove('active-btn');
//   });
// }
