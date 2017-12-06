var link = document.querySelector('.popup-open');
var popup = document.querySelector('.popup');
var close = document.querySelector('.close');
var login = popup.querySelector("[name=user-name]");

link.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.add('show-popup');
 login.focus();
  });

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove('show-popup');
  });

