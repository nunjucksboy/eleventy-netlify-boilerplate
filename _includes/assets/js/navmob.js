var burgerBtn = document.getElementById('burgerBtn');
var mobile = document.getElementById('mobile');
var navmob = document.getElementById('navmob');

burgerBtn.addEventListener('click', function() {
  mobile.classList.toggle('navigation');
}, false);


navmob.addEventListener('click', function() {
  navmob.classList.add('active');
  demo1.classList.remove('active');
  demo2.classList.remove('active');
  mobile.classList.add('navmob');
  mobile.classList.remove('demo1', 'demo2', 'navigation');
}, false);