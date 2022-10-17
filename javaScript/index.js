let myElem = document.getElementById('valHala')

myElem.addEventListener("focus", myFo, true);
myElem.addEventListener("blur", myBl, true);

function myFo() {
  document.querySelector(
    "header .container .main-nav .nav:last-child .container"
  ).style.cssText = "top: 78px; opacity: 1; pointer-events:painted";

  console.log('no no')
};


function myBl() {
  document.querySelector(
    "header .container .main-nav .nav:last-child .container"
  ).style.cssText = "top: 100px; opacity: 0; pointer-events:none";
  console.log('hello')
}