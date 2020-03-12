const menuToggler = document.querySelector('.hamburger');
const navigation = document.querySelector('nav');

menuToggler.addEventListener('click', function() {
  showMenu();
  changeFunction(this);
})

const changeFunction = function(x) {
  x.classList.toggle('change');
}

const showMenu = function() {
  navigation.classList.toggle('show');
}

/********** modal */

const buttons = document.querySelectorAll('button');
const modalImage = document.querySelector('.modal-image');
const modal = document.querySelector('.modal');
const close = document.querySelectorAll('.close');
const text = document.querySelector('.archive-item-text');


for(let button of buttons) {
  button.addEventListener('click', function(e){
    const source = e.target.nextElementSibling.src;
    modalImage.style.backgroundImage = `url(${source})`;
    modal.classList.add('show');
    modalImage.classList.add('show');
    text.classList.add('show')
   
  }
  )
}

for(let x of close) {
  x.addEventListener('click', function() {
    modal.classList.remove('show');
    modalImage.classList.remove('show');
  })
}