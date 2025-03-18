const dropdownBtns = document.querySelectorAll('.dropdownBtn');
for(const dropdownBtn of dropdownBtns){
  dropdownBtn.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
    dropDown.classList.toggle('show');
    dropDown.classList.toggle('dropdown-1');
    dropDown.classList.toggle('dropdown-2');
    dropDown.classList.toggle('dropdown-mobilejs');
    dropDown.classList.toggle('dropdoen-mobilejs2');
  });
}
const mobileView = document.querySelector('.mobile-view-dropdown');
const view= document.querySelector('.menu-icon');

view.addEventListener('click' , () => {
  mobileView.classList.toggle('view');
});

const remove = document.querySelector('.cross-mobile');

remove.addEventListener('click' , () => {
  mobileView.classList.remove('view');
});

const body = document.body;

view.addEventListener('click', () => {
  body.classList.toggle('.blurred');
})

const showList = document.querySelector('.dropdownbtn-mobile');
const dropdownformobile1 = document.querySelector('.dropdown-menu1-mobile');
const dropdownformobile2 = document.querySelector('.dropdown-menu2-mobile');
showList.addEventListener('click',() => {
   dropdownformobile1.classList.toggle('show2');
   dropdownformobile2.classList.toggle('show2');
})
/*const burgermenu = document.querySelector('.menu-icon');
for(const burgermenu of buttons){
  dropdownBtn.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
    dropDown.classList.toggle('show');
    dropDown.classList.toggle('dropdown-1');
    dropDown.classList.toggle('dropdown-2');
  });
}
function toggleClasses(element){
  classNames.forEach(className => {
    element.classList.toggle(className);
  });
}*/
/*function toggleMore(element, class0, class1){
   elment.classList.toggle('class0');
   element.classList.toggle('class1');
}

for(const dropdownBtn of dropdownBtns){
  dropdownBtn.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
     toggleMore(dropdown-icon, dropdown-toggle)
  });
}*/
