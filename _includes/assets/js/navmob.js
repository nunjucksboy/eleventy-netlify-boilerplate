var burgerBtn = document.getElementById('burgerBtn');
var mobile = document.getElementById('mobile');
var navmob = document.getElementById('navmob');


burgerBtn.addEventListener('click', function() {
  mobile.classList.toggle('navigation');
}, false);


